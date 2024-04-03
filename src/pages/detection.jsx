import React, { useState } from 'react';
import '../styles/App.css';
import query from '../assets/detection';


function Detection() {
    const [result, setResult] = useState(null);

    
    const handleFileChange = async (event) => {
        const file = event.target.files[0];
        if (!file) return;
    
        try {
          const response = await query(file);
          setResult(response);
        } catch (error) {
          console.error("Error detecting objects:", error);
        }
    };
    return (
            
        <div className="App">
        
            <body>
                <p>
                    Je suis un programme de détection des objets.
                    Il vous suffit de téléverser une image et je devine 
                    les objets présents dans l'image selon mon niveau d'intelligence.
                </p>
                <input type="file" onChange={handleFileChange} />
                {result && (
                    <div>
                    <h2>Results:</h2>
                    <pre>{JSON.stringify(result, null, 2)}</pre>
                    </div>
                )}
            </body>  
            
        </div>
    );
    }

export default Detection;