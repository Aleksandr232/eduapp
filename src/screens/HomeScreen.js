import { View, Text, StyleSheet, Button, FlatList  } from 'react-native';
import { DATA } from '../data';
import { Post } from '../post';


export default function  HomeScreen({navigation}) {
    const openPostHandler = post => {
  navigation.navigate('Post', { postId: post.id, edu: post.edu }) 
      }
    return (
        <View style={styles.wrapper}>
        <FlatList
          data={DATA}
          keyExtractor={post => post.id.toString()}
          renderItem={({ item }) => <Post post={item} onOpen={openPostHandler} />}
        />
      </View>
    );
  }


  const styles = StyleSheet.create({
    wrapper: {
      padding: 10
    }
  })