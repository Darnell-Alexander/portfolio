import './index.scss'
import emailjs from 'emailjs-com'
const ContactForm = () =>{
    return(
        <div className='page-container'>
           
            <Form />
            <RightBox />
        </div>
    )
}
const Form =()=>{
    function sendEmail(e){
        e.preventDefault();

        emailjs.sendForm('service_e1t9ubm', 'template_uokd3b5', e.target, 'yUFDw3paKzoYWgK_-')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
    }
    return(
        <form className='form-container' onSubmit={sendEmail}>
            <label><h1>Contact Form</h1></label>
            <Input l="FullName" v='name'  t='text' p='enter your name' />
            <Input l="E-Mail" v='email' t='email' p='enter your E-Mail' />
            <Input l="Phone" v='phone' t='tel' p='enter your number' />
            <Input className='subject' v='subject' l="Subject"  t='textarea' p="What's this about? "/>
            <label><h1>Message</h1></label>
            <textArea className='message' placeholder='how can I help? Please include the best way to reach you.' name='message'/>
            <input className='submit-btn' value='Send' type='submit' />
        </form>
        
    )
}

const RightBox =()=>{
    return(
        <div className='rightbox-container'>

        </div>
    )
}

const Input = (props)=>{
    return(
        <div className='input-field'>
            <h1>{props.l}</h1>
            <input name ={props.v} type={props.t} />
        </div>
    )
}
export default ContactForm;