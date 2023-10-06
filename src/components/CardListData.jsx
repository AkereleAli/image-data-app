import CardHolder from "./Cardmap"
import './searchbar.css'





const CardListData = ({ store }) => {

  console.log(store, 'store')
  return (
    <>
    <div className="flex" style={{margin: 'auto'}}>
      {store.map((item) => {
        return (
          <CardHolder
            key={item.id}
            id={item.id}
            title={item.title}
            description={item.description}
            image={item.image}
          />
        )
      })}
      </div>
    </>
  )
}

export default CardListData