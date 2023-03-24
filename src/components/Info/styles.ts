import {StyleSheet} from 'react-native'
import Colors from '../../configurations/Colors';


const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginStart: 25,
        marginEnd: 25,
        marginBottom: 15
    },
    itemContainer:{
        flexDirection: 'row',
    },
    containerTotal:{
        width: 22,
        height: 22,
        backgroundColor: Colors.Base.gray400,
        borderRadius: 25,
        marginLeft: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textTotal:{
        color: Colors.Base.gray100,
        fontWeight: 'bold'
    },
    text:{
        fontSize: 16,
        fontWeight: 'bold'
    },
    textCreated:{
        color: Colors.Produto.blue
    },
    textDone:{
        color: Colors.Produto.purple
    }
})


export default styles;