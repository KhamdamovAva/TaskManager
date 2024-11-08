import img from '../../assets/icons/message.png';
import Navigation from '../../components/navbar/Navigation';

function Message() {
  return (
    <div className='container borderLine rounded-[6px]'>
        <Navigation />
        <div className="mt-[130px]">
            <div className='flex justify-center '>
                <img src={img} alt="message" className='w-[466px] h-[353px]' />
            </div>
            <div className='text-center mt-[80px] mb-[150px]'>
                <h1 className='font-medium text-[35px] mb-[20px]'>We send link to your email.</h1>
                <p className='mx-auto w-[270px] font-normal'>You can log into your profile using the link we sent. Please check your email.</p>
            </div>
        </div>
    </div>
  )
}

export default Message