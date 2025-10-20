import { StyleSheet } from 'react-native';

/**
 * 👉 Students: create all your styles here.
 * Start with: container, headerText, sectionTitle, itemRow, itemName, counter, input, button, etc.
 * Keep style names semantic.
 */
export const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    paddingVertical: 20,
    backgroundColor: '#007b83',
    marginBottom: 20,
  },

  headerText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },

  itemRow: {
    margin: 5,
    flexDirection: 'row',
    // alignItems: 'center',
  },
  itemName: {
    flex: 1,
  },
  counter: {
    flex: 1
  },

  button: {
    backgroundColor: '#26a69a',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 6,
    marginHorizontal: 4,
  },

  addZikrButton: {
    backgroundColor: '#26a69a',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 6,
    margin: 5,
    width: 80,
  },

  textInput: {
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#cbd5e1',
    borderRadius: 10,
    paddingHorizontal: 7,
    paddingVertical: 5,
    margin: 5,
    fontSize: 13,
    width: '40%',
    color: '#111827',
  },

  section: {
    borderRadius: 12,
    padding: 16,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 10,
    textAlign: 'center',
  },

});
