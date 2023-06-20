import React, { useState, useEffect } from 'react';
import List from './List';
import Alert from './Alert';


interface ListItem {
  id: string;
  title: string;
}

const getLocalStorage = (): ListItem[] => {
  const list = localStorage.getItem('list');
  if (list) {
    return JSON.parse(list) as ListItem[];
  } else {
    return [];
  }
};

const App: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [list, setList] = useState<ListItem[]>(getLocalStorage);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [editID, setEditID] = useState<string | null>(null);
  const [alert, setAlert] = useState<{ show: boolean; msg: string; type: string }>({
    show: false,
    msg: '',
    type: '',
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    if (!name) {
      showAlert(true, 'danger', 'please enter value');
    } else if (name && isEditing) {
      setList((prevList) =>
        prevList.map((item) => {
          if (item.id === editID) {
            return { ...item, title: name };
          }
          return item;
        })
      );
      setName('');
      setEditID(null);
      setIsEditing(false);
      showAlert(true, 'success', 'value changed');
    } else {
      showAlert(true, 'success', 'item added to the list');
      const newItem: ListItem = { id: new Date().getTime().toString(), title: name };

      setList((prevList) => [...prevList, newItem]);
      setName('');
    }
  };

  const showAlert = (show: boolean = false, type: string = '', msg: string = ''): void => {
    setAlert({ show, type, msg });
  };

  const clearList = (): void => {
    showAlert(true, 'danger', 'empty list');
    setList([]);
  };

  const removeItem = (id: string): void => {
    showAlert(true, 'danger', 'item removed');
    setList((prevList) => prevList.filter((item) => item.id !== id));
  };

  const editItem = (id: string): void => {
    const specificItem = list.find((item) => item.id === id);
    setIsEditing(true);
    setEditID(id);
    if (specificItem) {
      setName(specificItem.title);
    }
  };

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list));
  }, [list]);

  return (
    <section className='section-center'>
      <form className='grocery-form' onSubmit={handleSubmit}>
        {alert.show && <Alert {...alert} removeAlert={showAlert} list={list} />}

        <h3>grocery bud</h3>
        <div className='form-control'>
          <input
            type='text'
            className='grocery'
            placeholder='e.g. eggs'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button type='submit' className='submit-btn'>
            {isEditing ? 'edit' : 'submit'}
          </button>
        </div>
      </form>
      {list.length > 0 && (
        <div className='grocery-container'>
          <List items={list} removeItem={removeItem} editItem={editItem} />
          <button className='clear-btn' onClick={clearList}>
            clear items
          </button>
        </div>
      )}
    </section>
  );
};

export default App;
