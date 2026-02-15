# AgroSense V3 - Monitoramento de Gases VOC 🌾

O **AgroSense** é um sistema de monitoramento industrial desenvolvido para o controle de Compostos Orgânicos Voláteis (VOC) em silos de armazenamento. [cite_start]Este projeto utiliza o conceito de **Nariz Eletrônico (E-Nose)** para identificar padrões aromáticos e garantir a qualidade dos grãos e preservados[cite: 339, 340].

O projeto foi refatorado pela **CodeCraftStudios** para demonstrar práticas modernas de desenvolvimento full-stack e arquitetura de software.

---

## 🛠️ Tecnologias e Arquitetura

[cite_start]O sistema adota o padrão **MVC (Model-View-Controller)** para garantir escalabilidade e manutenção simplificada[cite: 339, 340].

### **Backend**
* [cite_start]**Ambiente:** Node.js[cite: 340].
* [cite_start]**Framework:** Express para roteamento e gerenciamento de middlewares[cite: 37, 40].
* [cite_start]**Comunicação:** Axios para integração e consumo de APIs[cite: 168, 234].
* [cite_start]**Utilitários:** * `body-parser` para análise de requisições[cite: 3, 5].
    * [cite_start]`iconv-lite` para tratamento de codificações de dados industriais[cite: 60, 85].
    * [cite_start]`cors` para gerenciamento de controles de acesso[cite: 18].

### **Frontend**
* **Interface:** Painel web responsivo desenvolvido em HTML5 e JavaScript.
* [cite_start]**Integração:** Consumo em tempo real dos dados processados pelo backend[cite: 261, 262].

### **Simulador**
* [cite_start]**Propósito:** Um módulo dedicado para simular o comportamento de sensores de hardware (`device.js`), permitindo testes de estresse e validação de dados sem a necessidade de hardware físico no ambiente de desenvolvimento[cite: 166, 337].

---

## 📂 Estrutura do Repositório

* [cite_start]**`/backend`**: API do Servidor Node.js e lógica de negócio[cite: 340].
* [cite_start]**`/frontend`**: Dashboard de visualização para o usuário[cite: 340].
* [cite_start]**`/simulator`**: Script de simulação de sensores de gases VOC[cite: 340].

---

## 🚀 Como Executar o Projeto

### 1. Clonar o Repositório
```bash
git clone [https://github.com/SEU_USUARIO/agro-sense-v3.git](https://github.com/SEU_USUARIO/agro-sense-v3.git)
cd agro-sense-v3
