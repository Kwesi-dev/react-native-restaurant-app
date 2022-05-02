import { FlatList } from "react-native"
import CategoryItem from "./CategoryItem"
export default function Categories({CategoryItems, setSelected, selected}){
    return(
        <FlatList
        data={CategoryItems}
        renderItem={({item, index})=> {
          return <CategoryItem item={item} index={index} handlePress={()=>setSelected(item.name)} active={selected === item.name}/>
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(category) => category.name}
      />
    )
}