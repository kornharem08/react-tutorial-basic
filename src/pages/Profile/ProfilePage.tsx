
import { useParams } from 'react-router-dom';

const ProfilePage = () => {
  const { userId } = useParams();
  return (
    <div>
      <h1>Profile Page</h1>
      <p>User ID: {userId}</p>
    </div>
  );
};

export default ProfilePage;