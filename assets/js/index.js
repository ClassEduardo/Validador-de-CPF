class ValidaCPF {
   constructor() {
      this.display = document.querySelector('.display');
      this.div = document.querySelector('.result')
      this.resultLength = 0;
   }
   
   iniciar() {
      this.clickButtons();
      this.checkChar();
   }
   
   clearDiv() {
      return this.div = '';
   }

   preparaCpf() {
      const cpfLimpo = this.display.value.replace(/\D+/g, '');

      this.resultLength ++;
      if (this.resultLength > 1) {
         this.clearDiv();
      }
      return this.testCpf(cpfLimpo);
   }

   
   cpfValid() {
      const textSucesP = document.createElement('p');
      textSucesP.innerHTML = ('Cpf validado com sucesso.');
      textSucesP.setAttribute('class', 'text-success');


      return this.div.appendChild(textSucesP);
   }

   cpfInvalid() {
      const textFailP = document.createElement('p');
      textFailP.innerHTML = ('Cpf invalido.')
      textFailP.setAttribute('class', 'text-danger');

      return this.div.appendChild(textFailP);
   }


   editCpf(newCpf) {
      const newCpfEdit = newCpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4")
      this.cpfValid(newCpfEdit);
   }

   checkChar() {
      this.display.addEventListener('keypress', function(e) {
         let char = String.fromCharCode(e.keyCode);
         const pattern = '[0-9 - - .]'
         if(!char.match(pattern)) e.preventDefault();
      })
   }


   testCpf(cpfLimpo) {
      const cpfLimpoRecebido = cpfLimpo;
      if(typeof cpfLimpoRecebido !== 'string') return this.cpfInvalid();
      if(cpfLimpoRecebido.length !== 11) return this.cpfInvalid();
      if(cpfLimpo[0].repeat(11) === cpfLimpo) return this.cpfInvalid();
      

      const cpfLimpoTestado = cpfLimpo
      return this.contaCpf(cpfLimpoTestado);
   }

   contaCpf(cpfLimpoTestado) {
      const cpfLimpoRecebido = cpfLimpoTestado;

      const cpfParcial = cpfLimpoRecebido.slice(0, -2)

      const digito1 = this.createDigit(cpfParcial);
      const digito2 = this.createDigit(cpfParcial + digito1);
      const newCpf = cpfParcial + digito1 + digito2

      return this.editCpf(newCpf)
   }

   createDigit(cpfParcial) {
      const cpfArray = Array.from(cpfParcial)
      let regressio = cpfArray.length + 1;
      let total = cpfArray.reduce((ac, val) => {
         ac += (regressio * Number(val));
         regressio --;
         return ac;
      }, 0)
      const digito = 11 - (total % 11);
      return digito > 9 ? 0 : digito;
   }

   clickButtons() {
      document.addEventListener('click', e => {
         const elem = e.target;

         if(elem.classList.contains('btn_validate')) this.preparaCpf();
      })
   };
}

const cpf = new ValidaCPF();
cpf.iniciar();

/*
705.484.450-52 070.987.720-03

11 - (237 % 11) = 5 (Primeiro d??gito)

11 - (284 % 11) = 5 (Primeiro d??gito)

*/