
function MainButton({ children, type = 'button' }) {
  return (
    <button type={type} className='bg-black text-white w-[180px] h-[50px] rounded-[5px]'>{children}</button>
  )
}

export default MainButton
