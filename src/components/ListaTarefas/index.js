import { useState } from "react";
import {
  InputContainer,
  ListaContainer,
  ListaTarefasContainer,
  Tarefa,
  TaskInput,
  AddTaskButton,
  RemoveButton,
} from "./styled";
import bin from "../../assets/bin.png";

export function ListaTarefas() {
  const [novaTarefa, setNovaTarefa] = useState("");

  const onChangeTarefa = (event) => {
    setNovaTarefa(event.target.value);
  };

  const [lista, setLista] = useState(['tarefa 1', 'tarefa 2', 'tarefa 3']);

  const adicionaTarefa = () => {
    // const listaNovaTarefa = [...lista, novaTarefa]
    // setLista(listaNovaTarefa)
    if(novaTarefa !== ''){
      setLista([...lista, novaTarefa])
      setNovaTarefa('')
    }
    
  };

  const removeTarefa = (elementRemover) => {
   const filterList = lista.filter((tarefa) => tarefa !== elementRemover)
    setLista(filterList)

  };

  const renderList = lista.map((item, index) => {
    return (
      <Tarefa key={index}>
        <p>{item}</p>
        <RemoveButton onClick={() => removeTarefa(item)}>
          <img src={bin} alt="" width="16px" />
        </RemoveButton>
      </Tarefa>
    );
  });

  
  return (
    <ListaTarefasContainer>
      <InputContainer >
        <TaskInput
          placeholder="Digite aqui uma tarefa"
          value={novaTarefa}
          onChange={onChangeTarefa}
          
        />
        <AddTaskButton onClick={adicionaTarefa} >Adicionar</AddTaskButton>
      </InputContainer>

      <ListaContainer>
        <ul></ul>
        {renderList}
      </ListaContainer>
    </ListaTarefasContainer>
  );
}
