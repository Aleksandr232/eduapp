import {View, Text, StyleSheet, Image, Button, ScrollView, Alert} from 'react-native'
import { DATA } from '../data'


export default function  PostScreen({ navigation }) {
    const postId = navigation.navigate('Since')

  const post = DATA.find(p => p.id === postId)

 /*  useEffect(()=>{
    navigation.setParams({booked: post.booked})
  }, []) */

  const removeHandler = () => {
    Alert.alert(
      'Удаление поста',
      'Вы точно хотите удалить пост?',
      [
        {
          text: 'Отменить',
          style: 'cancel'
        },
        { text: 'Удалить', style: 'destructive', onPress: () => {} }
      ],
      { cancelable: false }
    )
  }

  return (
    <ScrollView>
      <Image source={{ uri: post.img }} style={styles.image} />
      <View style={styles.textWrap}>
        <Text style={styles.title}>{post.text}</Text>
      </View>
      <Button
        title='Удалить'
        color={THEME.DANGER_COLOR}
        onPress={removeHandler}
      />
    </ScrollView>
  )
}


PostScreen.navigationOptions = ({ navigation }) => {
    const edu = navigation.getParam('edu')
    /* const booked = navigation.getParam('booked') */
    return {
        headerTitle:(edu),
      }
    }


const styles = StyleSheet.create({
    image: {
      width: '100%',
      height: 200
    },
    textWrap: {
      padding: 10
    },
    title: {
      fontFamily: 'open-regular'
    }
  })