class ValidaCPF {
   constructor() {
      this.display = document.querySelector('.display');
   }

   iniciar() {
      this.clickButtons();
   }

   validadeCpf() {
      
   }

   clickButtons() {
      document.addEventListener('click', e => {
         const elem = e.target;

         if(elem.classList.contains('btn_clear')) this.clearDisplay();

         if(elem.classList.contains('btn_validate')) this.validadeCpf();

      })
   };


}

const cpfEnviado = new ValidaCPF(input_Cpf_String);
cpfEnviado.iniciar();