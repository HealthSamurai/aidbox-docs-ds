import React from 'react';

export default function SchemaView({ schemaUrl = 'schema.json' }) {
    const [schema, setSchema] = React.useState(null);

    React.useEffect(() => {
        // Load schema from provided URL
        fetch(schemaUrl)
            .then(response => response.json())
            .then(data => setSchema(data))
            .catch(error => console.error('Error loading schema:', error));
    }, [schemaUrl]);

    if (!schema) {
        return <div>Loading schema...</div>;
    }

    return (
        <div>
            <h2>Schema</h2>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.entries(schema.properties || {}).map(([name, property]: [string, any]) => (
                        <tr key={name}>
                            <td>{name}</td>
                            <td>{property.type}</td>
                            <td>{property.description}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}