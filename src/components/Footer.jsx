const Footer = () => {
   return (
      <footer style={{ display: 'flex' }}>
         <div className="contenedorSiguenos">
            <p style={{ margin: '0px' }}>Siguenos:</p>
            <div className="iconos">
               <i
                  className="fa-brands fa-instagram fa-xl"
                  style={{ color: '#edeef3' }}
               ></i>
               <i
                  className="fa-brands fa-facebook fa-xl"
                  style={{ color: '#d7dce5' }}
               ></i>
               <i
                  className="fa-brands fa-twitter fa-xl"
                  style={{ color: '#eaecf1' }}
               ></i>
            </div>
         </div>
         <p className="piePagina">Derechos reservados. @MAMMAMIA</p>
      </footer>
   );
};

export default Footer;
