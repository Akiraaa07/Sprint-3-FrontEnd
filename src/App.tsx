import React from 'react';
import './App.css';
import Homepage from './components/Home';
import LoginPage from './components/Login';
import ProdutosPage from './components/Produtos';
import ServicosPage from './components/Servicos';
import SobrePage from './components/Sobre';
import AcessibilidadePage from './components/Acessibilidade';

const App: React.FC = () => {
 return (
  <>
  <Homepage></Homepage>
  <ServicosPage></ServicosPage>
  <ProdutosPage></ProdutosPage>
  <AcessibilidadePage></AcessibilidadePage>
  <SobrePage></SobrePage>
  <LoginPage></LoginPage>

  <footer>&copy; 2023 Salesforce. Todos os direitos reservados </footer>
  </>
 );
}

export default App;