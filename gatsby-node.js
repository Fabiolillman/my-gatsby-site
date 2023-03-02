// const path = require('path')

// exports.createPages = async({graphql, actions}) =>{

// const { data: blogPostData} = await graphql(`
// query getAllSlugs {
//     allContentfulBlogPost {
//         nodes {
//           slug
//         }
  
//     }
//   }
// `)

// blogPostData.allContentfulBlogPost.nodes.forEach(node =>{
//     actions.createPage({
//         //URL
//         path: '/blog/' + node.slug,
//         // Template
//         component: path.resolve('./src/templates/blogpost.jsx'),
//         //Content
//         context: {slug: node.slug}

//     })
// })

// Query for projects
// const { data: projectsData } = await graphql(`
// query getAllProjectSlugs {
//   allContentfulProjects {
//     nodes {
//       slug
//     }
//   }
// }
// `)

// Loop through projects and create pages
// projectsData.allContentfulProjects.nodes.forEach(node => {
//     actions.createPage({
//         //URL
//         path: '/projects/' + node.slug,
//         // Template
//         component: path.resolve('./src/templates/projects.jsx'),
//         //Content
//         context: {slug: node.slug}
//     })
// })

// Query for category
// const { data: categoryData } = await graphql(`
// query getAllProjectSlugs {
//   allContentfulProjects {
//     nodes {
//       category {
//         category
//       }
//     }
//   }
// }
// `)

// Loop through projects and create pages
// categoryData.allContentfulProjects.nodes.forEach(node => {
//     actions.createPage({
//         //URL
//         path: '/category/' + node.category.category,
//         // Template
//         component: path.resolve('./src/templates/category-list.jsx'),
//         //Content
//         context: {skill: node.category.category}
//     })
// })

// }