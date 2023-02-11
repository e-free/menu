import Article from "../components/Article";
import Heading from "../components/Heading";
import Paragraph from "../components/Heading";

function ForzaPage() {
  return (
    <Article>
      <Heading title = "Forza Karting Sochi" />
      <Paragraph>В Олимпийском парке работает новый открытый развлекательный картинг центр мирового уровня!      </Paragraph>  
      <Paragraph>Вас ждут большая, широкая, безопасная трасса и супер современные карты
        европейского производства c двигателями мощностью 13 л.с.
        Трасса длинной более 500 метров  оборудована системой хронометража,
        фиксирующей данные заезда в режиме реального времени.
        По окончании заезда каждый пилот получает распечатку со своими результатами.
      </Paragraph> 
    </Article>
  )
}
export default ForzaPage
