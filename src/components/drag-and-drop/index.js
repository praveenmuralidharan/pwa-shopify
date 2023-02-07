import React, { useState, useRef } from 'react';
import { ArrowsUpDownIcon, ArrowDownIcon, ArrowUpIcon } from '@heroicons/react/24/outline'

const Tr = ({ children, id, onDragStart, onDragEnd, onDrop, className }) => {
  const cardRef = useRef();
  return (
    <tr
      ref={cardRef}
      onDragStart={(e) => onDragStart(e, id)}
      onDragEnd={onDragEnd}
      onDrop={(e) => onDrop(e, id)}
      onDragOver={(e) => e.preventDefault()}
      draggable
      className={className}
    >
      {children}
    </tr>
  );
};

const DragAndDrop = (args) => {
  const [cards, setCards] = useState([
    { id: 1, content: 'Card 1' },
    { id: 2, content: 'Card 2' },
    { id: 3, content: 'Card 3' },
  ]);
  const [draggedCard, setDraggedCard] = useState(null);

  const onDragStart = (e, id) => {
    setDraggedCard(id);
  };

  const onDragEnd = (e) => {
    setDraggedCard(null);
  };

  const onDrop = (e, dropId) => {
    const newCards = [...cards];
    const draggedIndex = cards.findIndex(card => card.id === draggedCard);
    const dropIndex = cards.findIndex(card => card.id === dropId);
    newCards[draggedIndex] = cards[dropIndex];
    newCards[dropIndex] = cards[draggedIndex];
    setCards(newCards);
  };
    
  return (
    <div className={(args.extraClass !== undefined ? args.extraClass : "")}>
        <div className="w-full">
            <div className="bg-white pb-5">
                <div className="overflow-x-auto border p-1">
                    <table className="w-full whitespace-nowrap">
                        <tbody>
                            {cards.map((card, index) => (
                                <Tr
                                    key={card.id}
                                    id={card.id}
                                    onDragStart={onDragStart}
                                    onDragEnd={onDragEnd}
                                    onDrop={onDrop}
                                    className={`focus:outline-none text-sm leading-none shadow text-gray-600 dark:text-gray-200 h-16 cursor-pointer ` + (index < (cards.length - 1) && "border-b")}
                                >
                                    <td className="w-1/2">
                                        <div className="flex items-center">
                                            <div className="w-10 h-10 bg-gray-700 rounded-sm flex items-center justify-center">
                                                <p className="text-xs font-bold leading-3 text-white">
                                                    { index === 0 && <ArrowDownIcon className="h-6 w-6 text-white" aria-hidden="true" /> }
                                                    { index < (cards.length - 1) && index > 0 && <ArrowsUpDownIcon className="h-6 w-6 text-white" aria-hidden="true" /> }
                                                    { index === (cards.length - 1) && <ArrowUpIcon className="h-6 w-6 text-white" aria-hidden="true" /> }
                                                </p>
                                            </div>
                                            <div className="pl-2">
                                                <p className="text-sm font-medium leading-none text-gray-800">{card.content}</p>
                                                <p className="text-xs leading-3 text-gray-600 mt-2">Shared by Ashley Wilson</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="pl-16">
                                        <p>#designer</p>
                                    </td>
                                    <td>
                                        <p className="pl-16">3.7gb</p>
                                    </td>
                                    <td>
                                        <p className="pl-16">4 members</p>
                                    </td>
                                    <td>
                                        <p className="pl-16">Shared on 21 Februray 2020</p>
                                    </td>
                                </Tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
  );
};
    
export default DragAndDrop;