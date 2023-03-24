import { StyleSheet } from 'react-native';
import Colors from '../../configurations/Colors';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginStart: 25,
        marginEnd: 25      
      },
      itemContainer:{
        flex: 1,
        flexDirection: 'row',
        borderRadius: 8,
        backgroundColor: Colors.Base.gray500,
        borderColor: Colors.Base.gray400,
        borderWidth: 1,
        height:64,
        paddingStart: 12,
        paddingEnd: 12,
        paddingBottom: 8,
        paddingTop: 12,
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center'
      },
      emptyContainer:{
        justifyContent: 'center',
        alignItems: 'center',
        borderTopWidth: 1,
        borderTopColor: Colors.Base.gray400
      },
      textEmptyContainer:{
        color: Colors.Base.gray300
      },
      clipboard:{
        marginBottom: 20,
        marginTop: 40
      },
      textDone:{
        textDecorationLine: 'line-through'
      },
      itemText:{
        flex: 5,
        color: Colors.Base.gray100
      },
      iconDelete:{
        color:Colors.Base.gray300
      }
});

export default styles;