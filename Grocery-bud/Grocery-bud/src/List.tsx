import React from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
interface ListItem {
  id: string;
  title: string;
}

interface ListProps {
  items: ListItem[];
  removeItem: (id: string) => void;
  editItem: (id: string) => void;
}

const List: React.FC<ListProps> = ({ items, removeItem, editItem }) => {
  return (
    <div className='grocery-list'>
      {items.map((item) => {
        const { id, title } = item;
        return (
          <article className='grocery-item' key={id}>
            <p className='title'>{title}</p>
            <div className='btn-container'>
              <button type='button' className='edit-btn' onClick={() => editItem(id)}>
                <EditIcon />
              </button>
              <button type='button' className='delete-btn' onClick={() => removeItem(id)}>
                <DeleteIcon />
              </button>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default List;
