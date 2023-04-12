import Card from "../../components/Card";
import CardColumn from "../../components/CardColumn";
import ListButton from "../../components/ListButton";
import Menu from "../../partials/Menu";
import './styles.css';

const todoCards = [
  { title: "Título do cartão 1", description: "A descrição da atividade, de uma forma um pouco menos resumida 1" },
  { title: "Título do cartão 2", description: "A descrição da atividade, de uma forma um pouco menos resumida 2" },
  { title: "Título do cartão 3", description: "A descrição da atividade, de uma forma um pouco menos resumida 3" },
  { title: "Título do cartão 4", description: "A descrição da atividade, de uma forma um pouco menos resumida 4" },
];

const inProgressCards = [
  { title: "Título do cartão 1", description: "A descrição da atividade, de uma forma um pouco menos resumida 1" },
  { title: "Título do cartão 2", description: "A descrição da atividade, de uma forma um pouco menos resumida 2" },
  { title: "Título do cartão 3", description: "A descrição da atividade, de uma forma um pouco menos resumida 3" },
];

const doneCards = [
  { title: "Título do cartão 1", description: "A descrição da atividade, de uma forma um pouco menos resumida 1" },
  { title: "Título do cartão 2", description: "A descrição da atividade, de uma forma um pouco menos resumida 2" },
  { title: "Título do cartão 3", description: "A descrição da atividade, de uma forma um pouco menos resumida 3" },
  { title: "Título do cartão 4", description: "A descrição da atividade, de uma forma um pouco menos resumida 4" },
  { title: "Título do cartão 5", description: "A descrição da atividade, de uma forma um pouco menos resumida 5" },
];

function Home() {
  return (
    <div className="home">
      <Menu>
        <div className="list-buttons">
          <ListButton 
            title="Lista diária" 
            description="Lista de tarefas de uma data escolhida"
            iconSrc="/images/calendar.svg"
          />
          <ListButton 
            title="Minha lista" 
            description="Lista criada ao clicar no botão de criar lista"
            iconSrc="/images/book.svg"
          />
        </div>
      </Menu>
      <div className="cards-section">
        <CardColumn
          title="Para fazer"
          variant="to-do"
        >
          {
            todoCards.map((item) => (
              <Card
                title={item.title} 
                description={item.description} 
                variant="to-do"
              />
            ))
          }
        </CardColumn>
        <CardColumn
          title="Para fazer"
          variant="in-progress"
        >
          {
            inProgressCards.map((item) => (
              <Card 
                title={item.title} 
                description={item.description} 
                variant="in-progress"
              />
            ))
          }
        </CardColumn>
        <CardColumn
          title="Para fazer"
          variant="done"
        >
          {
            doneCards.map((item) => (
              <Card 
                title={item.title} 
                description={item.description} 
                variant="done"
              />
            ))
          }
        </CardColumn>  
      </div>
    </div>
  )
}

export default Home;
