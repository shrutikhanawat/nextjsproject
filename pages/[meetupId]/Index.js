import MeetupDetail from "../../components/meetups/MeetupDetail";


function MeetupDetails() {
    return (
        <MeetupDetail
            image='https://upload.wikimedia.org/wikipedia/commons/4/41/Sikh_pilgrim_at_the_Golden_Temple_%28Harmandir_Sahib%29_in_Amritsar%2C_India.jpg'
            title='First Meetup'
            address='Some Streets 5, some City'
            description='This is a first meetup'
        />
    );
}
export async function getStaticPath(){
    return{
        fallback:false,
        paths:[{
            params:{
                meetupId:'m1',
            },
        },
        {
            params:{
                meetupId:'m2',
            },
        },
    ],
    }
}
 export async function getStaticProps(context){
  const meetupId = context.params.meetupId;
  console.log(meetupId);
  return {
      props:{
        image:'https://upload.wikimedia.org/wikipedia/commons/4/41/Sikh_pilgrim_at_the_Golden_Temple_%28Harmandir_Sahib%29_in_Amritsar%2C_India.jpg',
        id:'First Meetup',
        address:'Some Streets 5, some City',
        description:'This is a first meetup'
      },
      revalidate:1

  }
 }
export default MeetupDetails;