
const pool = require('./db');

// app.get('/writables' , async( req , res ) => {
//       try {
//           let allWritables = await pool.query(
//               "SELECT * FROM writable"
//           );
//           res.status(200).json({ data: allWritables.rows });
//       } catch ( err ) {
//           console.error( err.message );
//       }
// });
//
// app.post('/writable' , async (  req , res ) => {
//           try {
//               let { data } = req.body;
//               let newWritable = await pool.query(
//                   "INSERT INTO writable (data) VALUES ($1) RETURNING *" ,
//                    [ data ]
//               );
//               res.status(200).json({ data });
//           } catch ( err ) {
//               console.error( err.message );
//           }
//     })
//
// app.route('/writable/:id')
//    .get( async ( req , res ) => {
//          try {
//              let { id } = req.params;
//              let singleWritable = await pool.query(
//                  "SELECT * FROM writable WHERE writable_id = ($1)" ,
//                   [ id ]
//              );
//              res.status(200).json({ data: singleWritable.rows });
//          } catch ( err ) {
//              console.error( err.message );
//              res.status( 500 ).send( err );
//          }
//     })
//     .put( async( req , res ) => {
//           try {
//               let { id } = req.params; // where
//               const { data } = req.body; // set
//               let updatedWritable = await pool.query(
//                   "UPDATE writable SET data = $1 WHERE writable_id = $2" ,
//                    [ data , id ]
//               );
//               res.status(200).json({ data: updatedWritable });
//           } catch ( err ) {
//               console.error( err.message );
//               res.status( 500 ).send( err );
//           }
//     })
//     .delete( async ( req , res ) => {
//           try {
//               let { id } = req.params;
//               let deletedWritable = await pool.query(
//                   "DELETE FROM writable WHERE writable_id = ($1)" ,
//                    [ id ]
//               );
//               res.status(200).json({ data: deletedWritable });
//           } catch ( err ) {
//               console.error( err.message );
//               res.status( 500 ).send( err );
//           }
//     })
