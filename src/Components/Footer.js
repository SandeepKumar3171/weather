import { BsLinkedin,BsGithub,BsWhatsapp } from 'react-icons/bs';
import {AiOutlineMail} from 'react-icons/ai';
const Footer =()=>{


    return(<>
      <div  className="flex flex-row p-2 justify-around bg-gray-900 text-white">
        <div>
            <p className="hover:text-green-500 cursor-pointer">About</p>
            <p className="hover:text-green-500 cursor-pointer">Privacy Policy</p>
            <p className="hover:text-green-500 cursor-pointer">Terms and Condition</p>
            <p className="hover:text-green-500 cursor-pointer">Write For Us</p>
        </div>

        <div className="flex flex-col gap-1">
            <h3 className="font-medium">Contact Details</h3>
        <a className="hover:text-green-500 flex flex-row gap-1 items-center text-sm cursor-pointer" target="_blank" href="mailto:/sandeepidkk@gmail.com"><AiOutlineMail/> Email</a>
          <a className="hover:text-green-500 flex flex-row gap-1 items-center text-sm cursor-pointer" target="_blank" href="https://www.linkedin.com/in/sandeep-kashyap-336a69239/"><BsLinkedin/> Linkedin</a>
          <a className="hover:text-green-500 flex flex-row gap-1 items-center text-sm cursor-pointer" target="_blank" href="https://github.com/SandeepKumar3171"><BsGithub/> Github</a>
        </div>
        <div className="flex flex-col justify-center text-sm">
         <p >Design and Developed by :</p>
        <p>Sandeep Kashyap </p>
        <a className="hover:text-green-500 flex flex-row gap-1 items-center" target="_blank" href="https://wa.me/9616403152" ><BsWhatsapp/> whats'up me</a>  
             </div>
      </div>
     
    
    </>)

}

export default Footer;