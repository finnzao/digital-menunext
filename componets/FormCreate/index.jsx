import { useState } from 'react';
import styles from "./style.module.css";
import { useQueryClient, useMutation, QueryClient } from 'react-query';
import { newProd, getProds } from '@/lib/ProdResquests';
import { useReducer } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleChangeAction, updateAction } from "@/redux/reducer";
import { BsCheckCircleFill } from 'react-icons/bs'
import { GrAdd } from "react-icons/gr";
import axios from "axios";
import InputUpload from "../Layout/InputUpload"



function FormCreate() {
  //REDUCE
  const queryClient = useQueryClient();
  const formReduce = (state, event) => {
    try {
      return{
      ...state,
      [event.target.name]: event.target.value
    }
    }catch(e){
      console.log(e)
    }
  }
  const [formData, setFormData] = useReducer(formReduce, {title: '', desc: '', price: '', category: ''})
  const [errorMsg, setErroMsg] = useState("")

  const visible = useSelector((state) => state.app.client.toggleForm)
    const [previewSource,setPreviewSource]=useState();
   const [selectedFile, setSelectedFile] = useState();
    const [file,setFile]=useState('');
    const [urlFile,setUrlFile]=useState('');
  //MUTATION
  const dispacth = useDispatch()
  const addMutation = useMutation(newProd, {
    onSuccess: () => {
      queryClient.prefetchQuery('prods', getProds)
    }
  });

  //SEND FORM
  const sendForm = (e) => {
    try {
    let { title, desc, img,category, price, state } = formData;
    const model = {
      title: title,
      desc: desc,
      img: previewSource,
      category:category,
      price: [price],
      state: state
    }

    addMutation.mutate(model)
    setErroMsg("")
    onUpdate()
    setFormData({title: '', desc: '', price: '', category: ''})
  }
  catch (error) {
    console.log(error)
  }


}


  if (addMutation.isLoading) <div>Loading</div>
  if (addMutation.isError) console.log("Error")

  //SHOW FORMCREAET
  const onUpdate = () => {
    dispacth(toggleChangeAction())
  }


  //UPLOAD

   ///////////
    const handleFileInputChange = (e) => {//MOSTRANDO IMAGEM SELECIONADA
        const file = e.target.files[0];
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


  //TEST
  const checkProperties =(e) =>{
    console.log(formData)
    e.preventDefault()
    if(formData==undefined){
      return setErroMsg(<span className={styles.errorMsg}>Preencha todos os dados</span>)
    }
    for (var key in formData) {
    console.log(formData[key])
      if (formData[key] === undefined  ){
          console.log("empty")
        return setErroMsg(<span className={styles.errorMsg}>Preencha todos os dados</span>)
      }
    }
    setErroMsg(<span className={styles.okayMsg}>Dados preenchidos com sucesso</span>)
    sendForm()
    setPreviewSource('');
    setSelectedFile('');
}

  const Validation=(e)=>{
      e.preventDefault();
      if( (Object.keys(formData).length==0) || (Object.values(formData)=='')){
        return setErroMsg("error")
      }

      setErroMsg(false);
      sendForm()
      setPreviewSource('');
      setSelectedFile('');
  }

  //UPLOAD IMAGE
  const upload = (files)=>{
    console.log(files[0])
    const fileData = new FormData();
    fileData.append("file",files[0])
    console.log(fileData)
  }

  return (
    <div className={styles.box}>
      <div> <span className={styles.toggleForm} onClick={() => onUpdate()}><GrAdd />Adicionar Produto</span></div>
      {
        visible && (
          <form className={styles.board} onSubmit={checkProperties} >
            <input name='title' onChange={setFormData} className={styles.input} type="text" placeholder='Nome' required />
            <input name='desc' onChange={setFormData} className={styles.input} type="text" placeholder='Descrição' required/>
            <input name='price' onChange={setFormData} inputmode="numeric" className={styles.input} type="text" placeholder='Preço' required />
            <input name='category' onChange={setFormData}  className={styles.input} type="text" placeholder='Categoria' required />
            

            <label className={styles.picture} for="img" tabIndex="0">
                  <span className={styles.picture__image}>
                  Escolher imagem
                  {previewSource && (<img className={styles.picture__image} src={previewSource} alt="chosen"/>)}
                  </span>
            </label>

            <input name='img' id='img' className={styles.inputImg} onChange={handleFileInputChange} type="file" accept="image/*" required />

            
           
          
            <span className={styles.msgSpan} >{errorMsg}</span>
            <button className={styles.buttonForm}>Confirmar  <BsCheckCircleFill /></button>
          </form>
        )
      }

    </div>
  )
}

export default FormCreate;