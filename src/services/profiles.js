import profileImage1 from '../assets/images/AAAABcqBskTCn3DkGQQb75keSWbkb7UvDc5R_1jJvJuDyp6GgGN_TeMbo_kPwlwmE0gwOmeTh2hNyKhotFROEYtkelSkKYmL.png';
import profileImage2 from '../assets/images/AAAABRDMvpJYMAQU27LbtGkwehrciTz2o8_nxMwXAFxOU0gX3TqvdVX9BxM0iOdApFvsg5sCNBlFhmFNSfYWBZnCHG6czK77.png';
import profileImage3 from '../assets/images/AAAABSz8U4uC6_i0Fuc-oUrLQ-6_4cN4K_0kkS76utZWTEfAAFwG6TB09D0nSC1NqqtCJfckNvLVMajXBYjOSGc7zZi0Dx7z.png';
import profileImage4 from '../assets/images/AAAABT9hLeiJJZ_6sDW9R9SmokYJelp95EDTQLxhyybT7lJDLHLxCE2FiWalbJLxUoBf_9NQhOfjxw52806uTsPpA0k14lDu.png';
import profileImage5 from '../assets/images/AAAABViuMLuBYw5FNU5ZfVL98ZRjO8cXjAuwslaEP4meK7k8Ki-LqeiX0B8g8HfcAftRb8Ha6uUlu53Ym6OMfuvAn79KgoGR.png';

export const profiles = {
    Gustavo‍: profileImage1,
    Lucas: profileImage2,
    Igor: profileImage3,
    Juan: profileImage4,
    Samuell: profileImage5,
};

export const profileArray = () => {
    let p = [];
    for (let [name, image] of Object.entries(profiles)) {
        p.push({ name, image, kidStatus: false });
    }
    p[3].kidStatus = true;
    return p;
};

const getProfileImage = async (profileName, setProfileState) => {
    let profileArray = {
        Gustavo‍: profileImage1,
        Lucas: profileImage2,
        Igor: profileImage3,
        Juan: profileImage4,
        Samuell: profileImage5,
    };
    setProfileState(profileArray[profileName]);
};

export const getKidStatus = (profileName) => {
    let profile = profileArray().filter(
        (profile) => profile.name === profileName
    )[0];
    return profile.kidStatus;
};
export default getProfileImage;
