import axios from "axios";
import { useState } from 'react';

export default function inputUpload() {
  const [previewSource,setPreviewSource]=useState();
   const [selectedFile, setSelectedFile] = useState();
    const [file,setFile]=useState('');
   ///////////
    const handleFileInputChange = (e) => {//MOSTRANDO IMAGEM SELECIONADA
        const file = e.target.files[0];
        console.log(typeof(file));
        previewFile(file);
        setSelectedFile(file);
        setFile(e.target.value);
    };
    const previewFile = (file) => {

        const reader = new FileReader();
        reader.readAsDataURL(file);//transformando na represetanção em STRING da imagem
        reader.onloadend = () => {
            setPreviewSource(reader.result);
        };
    };

    const handleSubmitFile = (e) => {
        if (!selectedFile) return;
        uploadImage(previewSource)
    };
    const uploadImage =  (base64EncodedImage) => {
        try {
            fetch('/api/upload', {
                method: 'POST',
                body: JSON.stringify({ data: base64EncodedImage }),
                headers: { 'Content-Type': 'application/json' },
            })
            .then(response=>response.json())
            .then(data=> console.log(data.url))
        } catch (err) {
            console.error(err);
            
        }    
    };
    const handleCreate=  ()=>{
        try { 
            handleSubmitFile(file);
            setPreviewSource('');
            setSelectedFile('');
        }  catch (error) {
            console.log(error)
        }
    }
  return (
    <>
    <input name='img' onChange={handleFileInputChange} type="file" accept="image/*" />
         {previewSource && (
                        <img src={previewSource} alt="chosen" 
                        style={{height:'300px',width:"300px"}}
                       />
                    )}
      <button onClick={handleCreate}>ENVIAR</button>
    </>
  )

}