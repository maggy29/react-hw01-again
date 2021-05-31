import PaintingList from './components/PaintingList';
import Section from './components/Section/Section';
import Profile from './components/Profile/Profile';
import Statistics from './components/Statistics/Statistics';
import FriendList from './components/FriendList/FriendList';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import paintings from './paintings.json';
import user from './user.json';
import statData from './statData.json';
import friends from './friends.json';
import transactions from './transactions.json';

export default function App() {
  
  return (
    <div>
      
      <Section title="Топ недели">
        <PaintingList items={paintings} />
      </Section>

      <Section title="Лучшее"></Section>

      <Profile 
      name={user.name} 
      tag={user.tag} 
      location={user.location} 
      avatar={user.avatar} 
      stats={user.stats}
      />
      
      <Statistics title="Upload stats" stats={statData} />
      <Statistics stats={statData} />
      
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
}