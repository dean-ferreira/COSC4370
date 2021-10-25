#version 330 core
out vec4 color;

in vec3 FragPos;  
in vec3 Normal;  
  
uniform vec3 lightPos; 
uniform vec3 viewPos;
uniform vec3 lightColor;
uniform vec3 objectColor;

void main()
{
    // TODO: Replace with your code...
    // If gl_Position was set correctly, this gives a totally red cube
    float ambientStrength = 0.1;
    vec3 ambient = ambientStrength*lightColor;
    vec3 norm = normalize(Normal);
    vec3 lightDir = normalize(lightPos-FragPos);
    vec3 viewDir = normalize(viewPos-FragPos);
    vec3 reflectDir = reflect(-lightDir, norm);
    float diff = max(dot(norm, lightDir), 0.0);
    float spec = pow(max(dot(viewDir, reflectDir), 0.0), 64);
    vec3 specular = spec*lightColor;
    color = vec4((ambient+(diff*lightColor)+specular)*objectColor, 1.0);
    // reference to https://learnopengl.com/Lighting/Basic-Lighting
} 
