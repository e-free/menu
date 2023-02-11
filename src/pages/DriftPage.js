import Article from "../components/Article";
import Heading from "../components/Heading";
import Paragraph from "../components/Heading";

function DriftPage() {
  return (
    <Article>
      <Heading title = "Дрифт-такси" />
      <Paragraph>Только ​на Сочи Автодроме вас ждет уникальная возможность
        промчаться по трассе Формулы 1 на максимально возможной
        скорости в управляемом заносе на легендарной «королеве дрифта» Nissan Silvia!
      </Paragraph>  
      <Paragraph>Прокатитесь на дрифт-такси с вице-чемпионом Межконтинентального
        кубка по дрифту под эгидой FIA 2017 года Аркадием Цареградцевым и
        испытайте на себе, что значат скоростные постановки и эффектные заносы!
      </Paragraph> 
    </Article>
  )
}
export default DriftPage
