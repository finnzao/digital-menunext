import { useState} from 'react';
import styles from "./style.module.css";
import { useQueryClient, useMutation, QueryClient } from 'react-query';
import { useSelector, useDispatch } from 'react-redux';
import { newProd, getProds } from '../../lib/ProdResquests';
import { toggleChangeAction, updateAction } from "../../redux/reducer";
import { BsCheckCircleFill } from 'react-icons/bs';
import { GrAdd } from "react-icons/gr";
import ComboBox from "../../componets/Buttons/comboBox";
import InputUpload from "../Layout/InputUpload"



function FormCreate({data}) {
  //State
  const queryClient = useQueryClient();
  const [newCategory,setNewCategory]=useState(false)
  const [formData, setFormData] = useState({title: '', desc: '', price: '', category: ''})
  const [errorMsg, setErroMsg] = useState("")
  const [previewSource,setPreviewSource]=useState();
  const [selectedFile, setSelectedFile] = useState();
  const [file,setFile]=useState('');
  const [urlFile,setUrlFile]=useState('');
  const visible = useSelector((state) => state.app.client.toggleForm)


  //MUTATION
  const dispacth = useDispatch()
  const addMutation = useMutation(newProd, {
    onSuccess: () => {
      queryClient.prefetchQuery('prods', getProds)
    }
  });
  if (addMutation.isLoading) <div>Loading</div>
  if (addMutation.isError) console.log("Error")

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
    setFormData({title: '', desc: '', price: '', category: ''})
  }
  catch (error) {
    setErroMsg(error)
  }
}
  
  
//handle
  const handleChange = (e)=>{
    if(event.target.id==="category"){
      if(event.target.value==="*"){
        setNewCategory(true)
      }else{
        setNewCategory(false)
      }
    }
    const {name,value} = e.target;
    setFormData((prev)=>{
      return {...prev,[name]:value.trim()}
    })
  }

  //SHOW FORM CREATE
  const onUpdate = () => {
    dispacth(toggleChangeAction())
  }


  //UPLOAD & PREVIEW IMG

    const handleFileInputChange = (e) => {
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


  //CONFIRM BUTTOON & VERIFICATION
  const checkProperties =(e) =>{
    var pattern= /\d?[,.]?[\d]$/g;
    e.preventDefault()
    if (!pattern.test(formData.price)){
        return setErroMsg(<span className={styles.errorMsg}>É permitido apenas números e "." ou "," na aba preço </span>)
    }
    formData.price= formData.price.replace(",", ".");
    for (var key in formData) {
    if (formData[key] === undefined || formData[key] === "*" || formData[key]==="" || previewSource=="" || previewSource==undefined ){
        return setErroMsg(<span className={styles.errorMsg}>Preencha todos os dados</span>)
      }
    }

    setErroMsg(<span className={styles.okayMsg}>Dados preenchidos com sucesso</span>)
    sendForm()
    setPreviewSource('');
    setSelectedFile('');
}



  //UPLOAD IMAGE
  const upload = (files)=>{
    const fileData = new FormData();
    fileData.append("file",files[0])
  }

  return (
    <div className={styles.box}>
          <h1 className={styles.title}>Novo Produto</h1>
          <form className={styles.board} onSubmit={checkProperties} >

            <span>
            <p className={styles.titleInput}>Nome</p>
            <input name='title' onChange={handleChange} className={styles.input} type="text" placeholder='Nome' maxLength="100" />
            </span>

            <span>
            <p className={styles.titleInput}> Descrição</p>
            <textarea input name='desc' onChange={handleChange} className={styles.input}  type="text" placeholder='Descrição' rows="4"></textarea>
            </span>

            <span>
            <p className={styles.titleInput}>Preço</p>
            <input name='price' onChange={handleChange} inputMode="decimal" className={styles.input} type="text" placeholder='Preço'  maxLength="6"  />
            </span>
  
            <span className={styles.containerCategory}>
            <p className={styles.titleInput}>Categoria</p>

            <select  onChange={handleChange}  id="category" name="category" className={styles.comboBox}>
            <option value=''>Selecionar Categoria</option>
             <ComboBox data={data}/>
            <option className={styles.newCategory} value='*' >Nova Categoria</option>

            </select>
            {
              newCategory &&( 
              <input name='category' onChange={handleChange}  className={styles.input} type="text" placeholder='Nome da nova categoria'  />
            )
            }
            </span>           

            <label className={styles.picture} htmlFor="img" tabIndex="0">
                  <span className={styles.picture__image}>
                  Escolher imagem
                  {previewSource && (<img className={styles.picture__image} src={previewSource} alt="chosen"/>)}
                  </span>
            </label>

            
            <input name='img' id='img' className={styles.inputImg} onChange={handleFileInputChange} type="file" accept="image/*"  />
                         
            <span className={styles.msgSpan} >{errorMsg}</span>
            <button className={styles.buttonForm}>Confirmar  <BsCheckCircleFill /></button>
          </form>
 

    </div>
  )
}

export default FormCreate;