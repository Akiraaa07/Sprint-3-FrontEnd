import React from 'react';
import logoSalesforce from './images/salesforce.png';
import logoHome from './images/ursosales.webp';

const HomePage: React.FC = () => {
    return (
        <div>
            <header>
                <div className="logo">
                    <img src={logoSalesforce} alt="Logo Salesforce"/>
                </div>
                <div className='menu' style={{ marginLeft: '20px', marginRight: 'auto' }}>
                    <a href="index.html">Home</a>
                    <a href="servicos.html">Serviços</a>
                    <a href="produtos.html">Produtos</a>
                    <a href="acessibilidade.html">Acessibilidade</a>
                    <a href="sobre.html">Sobre/Equipe</a>
                    <a href="organograma.html">Organograma</a>
                </div>
                <div className="login-button" style={{ marginRight: '20px' }}>
                    <a href="login.html"><button id="inscreva-se-btn">Faça login</button></a>
                </div>
            </header>

            <main>
                <aside>
                    <div className="home-text-section">
                        <h1 className="primary-heading">
                            Experimente o
                            Salesforce Starter
                            Suite gratuitamente.
                        </h1>
                    </div>
                    <p className='primary-text'>
                        Reúna marketing, vendas e atendimento em um único aplicativo. Experimente o Salesforce Starter Suite hoje mesmo. Não há nada para instalar. Não é necessário cartão de crédito.
                    </p>
                </aside>
                <article>
                    <img className="imghome" src={logoHome} alt="Avatar da Salesforce" />
                </article>
            </main>
        </div>
    );
}

export default HomePage;
