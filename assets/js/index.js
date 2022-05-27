class ValidaCPF {
   constructor() {
      this.display = document.querySelector('.display');
   }

   iniciar() {
      this.clickButtons();
   }

   limpaCpf() {
      const cpfLimpo = this.display.value.replace(/\D+/g, '');
      return this.validadeCpf(cpfLimpo);
   }

   validadeCpf(cpfLimpo) {
      const cpfLimpoRecebido = cpfLimpo;
      console.log(cpfLimpoRecebido)
   }

   clickButtons() {
      document.addEventListener('click', e => {
         const elem = e.target;

         if(elem.classList.contains('btn_clear')) this.clearDisplay();

         if(elem.classList.contains('btn_validate')) this.limpaCpf();

      })
   };

}

const cpf = new ValidaCPF();
cpf.iniciar();
/*
705.484.450-52 070.987.720-03

11 - (237 % 11) = 5 (Primeiro dígito)

11 - (284 % 11) = 5 (Primeiro dígito)
*/