    import React from "react";
    import './button.css'

    //Função abaixo tem a intenção de componetizar cada botão da calculadora
    
    const Botao = ({children, onClick, isInput}) => { //É passado 3 props para esse botão
        const ehNum = (val) =>{ //Função recebe um valor
            if (!isNaN(val) || val === 'C' || val === '.'){
                return true;
            }
            return false;
        }

        const ehIgual = (val) => {
            if (val === '='){
                return true;
            }
            return false;
        }
    
    
        return(
            <>
                {isInput ? (
                    <div className="input">{children}</div>
                ) : (
                    <div className={`botao-wrapper botao ${ehIgual(children) ? "btn-igual" : null} ${ehNum(children) ? null : "operacao"}`} onClick={() => onClick(children)}>
                        
                        {children}

                    </div>
                )}
            </>
        );
    }

    export default Botao;