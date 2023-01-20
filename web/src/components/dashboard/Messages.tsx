import { useRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const Messages = () => {
  const messages = [
    {
      user: 'John Doe',
      subject: 'Trip suggestion',
      date: '1 hour ago'
    },
    {
      user: 'John Doe',
      subject: 'Trip suggestion',
      date: '2 hours ago'
    },
    {
      user: 'John Doe',
      subject: 'Trip suggestion',
      date: '3 hours ago'
    },
    {
      user: 'John Doe',
      subject: 'Trip suggestion',
      date: '1 hour ago'
    }
  ];

  const messagesRef = useRef(null);
  const tableRef = useRef(null);

  useEffect(() => {
    const messagesHeight = messagesRef.current.clientHeight;
    const headingHeight = messagesRef.current.querySelector('h3').clientHeight;
    tableRef.current.style.height = `${messagesHeight - headingHeight}px`;
  }, [messagesRef]);

  return (
    <div ref={messagesRef} className="h-100 overflow-hidden">
      <h3 className="mb-3">Messages</h3>
      <div ref={tableRef} className="hidescroll" style={{ overflow: 'scroll' }}>
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">User ID</th>
              <th scope="col">Subject</th>
              <th scope="col">Date</th>
            </tr>
          </thead>
          <tbody>
            {messages.map((message, index) => (
              <tr key={index} onClick={() => console.log('clicked')} style={{ cursor: 'pointer' }}>
                <td className="text-center"><NavLink to={`/trips/${message.trip_id}`} className="text-decoration-none">{message.user}</NavLink></td>
                <td>{message.subject}</td>
                <td>{message.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Messages;
