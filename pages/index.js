import MeetupList from '../components/meetups/MeetupList';

const DUMMY_MEETUPS = [{
    id: 'm1',
    title: 'A First Meetup',
    image: 'https://upload.wikimedia.org/wikipedia/commons/4/41/Sikh_pilgrim_at_the_Golden_Temple_%28Harmandir_Sahib%29_in_Amritsar%2C_India.jpg',
    address: 'Some address 5,12345 some city',
    description: 'This is a first meetup'
  }, {
    id: 'm2',
    title: 'A Second Meetup',
    image: 'https://upload.wikimedia.org/wikipedia/commons/4/41/Sikh_pilgrim_at_the_Golden_Temple_%28Harmandir_Sahib%29_in_Amritsar%2C_India.jpg',
    address: 'Some address 10,12345 some city',
    description: 'This is a second meetup'
  }];
  
function HomePage(props){
    
  
  return (
 <MeetupList meetups={props.meetups}/>
    )      

};
//export async function getServerSideProps(context){
  //const req = context.req;
  //const res = context.res;
  //return {
   // props:{
     // meetups:DUMMY_MEETUPS
   // }
  //};
export async function getStaticProps(){
  return {
    props:{
      meetups:DUMMY_MEETUPS
    },
    revalidate:1
  };
}

export default HomePage;
