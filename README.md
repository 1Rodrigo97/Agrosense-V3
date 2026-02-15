# AgroSense V3 - Monitoramento de Gases VOC 🌾

O **AgroSense** é um sistema de monitoramento industrial desenvolvido para o controle de Compostos Orgânicos Voláteis (VOC) em silos de armazenamento. [cite_start]Este projeto utiliza o conceito de **Nariz Eletrônico (E-Nose)** para identificar padrões aromáticos e garantir a qualidade dos grãos e preservados.

O projeto foi refatorado pela **CodeCraftStudios** para demonstrar práticas modernas de desenvolvimento full-stack e arquitetura de software.

---

## 🛠️ Tecnologias e Arquitetura

O sistema adota o padrão **MVC (Model-View-Controller)** para garantir escalabilidade e manutenção simplificada.

### **Backend**
* **Ambiente:** Node.js.
* **Framework:** Express para roteamento e gerenciamento de middlewares.
* **Comunicação:** Axios para integração e consumo de APIs.
* **Utilitários:** * `body-parser` para análise de requisições.
    * `iconv-lite` para tratamento de codificações de dados industriais.
    * `cors` para gerenciamento de controles de acesso.

### **Frontend**
* **Interface:** Painel web responsivo desenvolvido em HTML5 e JavaScript.
* **Integração:** Consumo em tempo real dos dados processados pelo backend.

### **Simulador**
* **Propósito:** Um módulo dedicado para simular o comportamento de sensores de hardware (`device.js`), permitindo testes de estresse e validação de dados sem a necessidade de hardware físico no ambiente de desenvolvimento.

---

## 📂 Estrutura do Repositório

* **`/backend`**: API do Servidor Node.js e lógica de negócio.
* **`/frontend`**: Dashboard de visualização para o usuário.
* **`/simulator`**: Script de simulação de sensores de gases VOC.

---

## 🚀 Como Executar o Projeto

### 1. Clonar o Repositório
```bash
git clone [https://github.com/SEU_USUARIO/agro-sense-v3.git](https://github.com/SEU_USUARIO/agro-sense-v3.git)
cd agro-sense-v3

Configurar o Backend
cd backend
npm install
node server.js

Executar o Simulador
cd simulator
npm install
node device.js

Acessar o Painel
Basta abrir o arquivo index.html localizado na pasta /frontend em seu navegador.


