import axios from 'axios';
import services from '@/services.js';

jest.mock('axios');

describe('api functionalities', () => {
  it('should get trend movies', () => {
    const users = [
      {
          
      }
    ];
    const response = {data: users};
    axios.get.mockResolvedValue(response);

    return services.getUsers().then(data => expect(data.data).toEqual(users));
  })
})
