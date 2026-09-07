import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native';
import {useState} from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function FoldersScreen() {

    const [folders, setFolders] = useState([
        {id: '1', name: 'Faculdade'},
        {id: '2', name: 'Pessoal'},
]);

    const [newFolderName, setNewFolderName] = useState('');

    const [isCreating, setIsCreating] = useState(false);

    function addFolder(){
        const name = newFolderName.trim();
        if(!name) {
            return;
        }

        setFolders([
            ...folders,
            {id: Date.now().toString(), name: name},
        ]);
        setNewFolderName('');
        setIsCreating(false);
    }
    
    return (
        <View style={styles.container}>
            <Pressable
                onPress={() => setIsCreating(!isCreating)}
                style={styles.createButton}
              >
                <Ionicons name={isCreating ? 'remove-circle-outline' : 'add-circle-outline'} size={32} color="#38b06c" />
            </Pressable>

              
          {isCreating ? (
            <>
              <TextInput
                value={newFolderName}
                onChangeText={setNewFolderName}
                placeholder="Nome do Workspace"
                placeholderTextColor="#888"
                style={styles.input}
              />
              <Pressable onPress={addFolder} style={styles.button}>
                <Text style={styles.buttonText}>Criar</Text>
              </Pressable>
             
            </>
          ) : (
            <>
              
              {folders.map((folder) => (
                <Text key={folder.id} style={styles.text}>
                  {folder.name}
                </Text>
              ))}
            </>
          )}
        </View>
      );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 24,
  },
  input: {
    width: '80%',
    backgroundColor: '#1a1a1a',
    color: '#ffff',
    padding: 12,
    borderRadius: 8,
    marginBottom:12,
  },
  button: {
    backgroundColor: '#38b06c',
    paddingVertical: 10,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginBottom:24,
  },
  buttonText: {
    color:'#fff',
    fontSize: 16,
  },
  createButton:{
    position: 'absolute',
    top: 16,
    right: 12, 
  },
  
});