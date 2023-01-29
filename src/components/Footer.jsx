export const Footer = () => {
  const currentYear = new Date().getFullYear()
  const startYear = 2023
  return (
    <footer className='py-2'>
      <p className='text-center'>&copy; {currentYear !== startYear ? `${startYear} - ${currentYear}` : startYear}, Vicente Jorquera. Todos los derechos reservados.</p>
    </footer>
  )
}
