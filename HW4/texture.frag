
#version 330 core
out vec4 color;

in vec2 UV;
uniform sampler2D myTextureSampler;

void main()
{
    // TODO: pub with your code...
    color = vec4(texture(myTextureSampler, vec2(UV.x,1.0-UV.y)).rgb, 1.0);
}
