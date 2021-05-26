import {User} from '../../models/Users';
export const resolvers = {
    Query: {
        getUser: (_parent, _args, _context) => {
            let user = User.findOne({_id:_args._id});
            return user
        }
    },
    Mutation: {
        addUsers: (_parent, _args, _context) => {
            const { name, email} = _args;
            const userObj = new User({
                name,
                email
            });
            return userObj.save()
                .then (result => {
                    return { ...result._doc }
                })
                .catch (err => {
                    console.error(err)
                })
        }
    }
};
