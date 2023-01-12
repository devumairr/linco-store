# LINCO ECOMMERCE STORE

## Figma Designs

[FIGMA-DESiGN-URL](https://www.figma.com/file/H3PFJVBvswWnulY4vUa453/Linco?node-id=0%3A1)
## Node version
```
18.12.1
```

## Installation

```
npm i
```

## Start Project

```
npm start
```


## Rules for letter case

> Folder Name `lowerCamelCase`

example : 
  
    folderName
    dashboard
    
> File Name `PascalCase`

example : 
  
    FileName.tsx
    Index.tsx
    Dashboard.tsx
    
    
 > Component `PascalCase`
 
 example :
      
      const Dashboard= () => {
        return (
          <h1> Welcome to dashboard !<h1/>
         )
      }
    
      export default Dashboard
      
      
  > Function and Variable `lowerCamelCase`
      
   example :
      
        const userName=''
        const userEmail=''
        
        const handleChange= () => {
          // somthing
        }
        
   
   > Constants / Enums `UPPERCASE`
   
   exapmle :
      
        const PI=3.142
        
        enum Direction {
          Up = "UP",
          Down = "DOWN",
          Left = "LEFT",
          Right = "RIGHT",
        }
        
   
   
   > Folder Structure
    
      -assets
      -layouts
      -components
      -pages
      -routes
      -config
      -services
      -utils
 
   > Folder Structure Nested
    
      -assets
          -images
          -icons
      -layouts
          -auth
          -main
      -components
          -card
              -Card.jsx
      -pages
           -home
              -Home.jsx
           -about
              -About.jsx
           -contact
              -Contact.jsx
      -routes
          -public
          -private
      -config
           -config.ts
      -services
            -dashboard
               -dashboard.services.ts
      -utils
            -helpers
            -formatDate
            -formatNumber
 
