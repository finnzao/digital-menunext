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
    return {
      ...state,
      [event.target.name]: event.target.value
    }
  }
  const [formData, setFormData] = useReducer(formReduce, {})
  const [errorMsg, setErroMsg] = useState(false)

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
    onUpdate()
  }
  catch (error) {
    console.log(error)
    setErroMsg(true)
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
  function checkProperties(obj) {

    for (var key in obj) {
      console.log(obj[key])
        if (obj[key] !== null && obj[key] != ""){
            console.log("In")
            return true;
          }
    }
    return false;
}

  const Validation=(e)=>{
      e.preventDefault();
      if( (Object.keys(formData).length==0) || (Object.values(formData)=='')){
        return setErroMsg(true)
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
          <form className={styles.board} onSubmit={Validation} >
            <input name='title' onChange={setFormData} className={styles.input} type="text" placeholder='Nome' />
            <input name='desc' onChange={setFormData} className={styles.input} type="text" placeholder='Descrição' />
            <input name='price' onChange={setFormData} className={styles.input} type="numer" placeholder='Preço' />
            <input name='category' onChange={setFormData} className={styles.input} type="numer" placeholder='Categoria' />
            <input name='img' onChange={handleFileInputChange} type="file" accept="image/*" />
            {previewSource && (<img src={previewSource} alt="chosen"style={{height:'300px',width:"300px"}}/>)}
           
          
            <span className={styles.error}>{errorMsg?"Preencha todos os campos":""}</span>
            <button className={styles.buttonForm}>Confirmar  <BsCheckCircleFill /></button>
          </form>
        )
      }

    </div>
  )
}

export default FormCreate;