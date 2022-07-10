export default class WindTurbineBase{
    vertexData = [ -0, 8.9414, -0.235877, 0.997943, 0.194355, -0, 0.6383, -0.7698, 0.303397, -0.081537, -0.303397, 0.000394, 0.200269, 0.5536, -0.6222, -0.5536, 0, -0.081537, -0.429068, 0.001286, 0.140703, -0, -0.6222, -0.7829, 0.16679, 8.9414, -0.16679, 0.997452, 0.227101, 0.5443, 0.6383, -0.5443, 0.429068, -0.081537, 0, 9.7e-05, 0.259852, 0.7829, -0.6222, -0, 0.235877, 8.9414, 0, 0.997289, 0.259856, 0.7698, 0.6383, -0, 0.303397, -0.081537, 0.303397, 0.000394, 0.319435, 0.5536, -0.6222, 0.5536, 0.16679, 8.9414, 0.16679, 0.997452, 0.292611, 0.5443, 0.6383, 0.5443, -0, -0.081537, 0.429068, 0.001286, 0.379002, -0, -0.6222, 0.7829, -0, 8.9414, 0.235877, 0.997943, 0.325357, -0, 0.6383, 0.7698, -0.303397, -0.081537, 0.303397, 0.002772, 0.438537, -0.5536, -0.6222, 0.5536, -0.16679, 8.9414, 0.16679, 0.998759, 0.358085, -0.5443, 0.6383, 0.5443, -0.429068, -0.081537, 0, 0.004851, 0.498023, -0.7829, -0.6222, -0, -0.235877, 8.9414, 0, 0.850537, 0.826325, -0.7698, 0.6383, -0, -0, 8.9414, 0.235877, 0.912392, 0.851947, -0, 0.6383, 0.7698, 0.235877, 8.9414, 0, 0.886771, 0.913802, 0.7698, 0.6383, -0, -0.235877, 8.9414, 0, 0.999903, 0.128925, -0.7698, 0.6383, -0, -0.303397, -0.081537, -0.303397, 0.002772, 0.081168, -0.5536, -0.6222, -0.5536, -0.429068, -0.081537, 0, 0.004852, 0.021681, -0.7829, -0.6222, -0, -0.16679, 8.9414, -0.16679, 0.998759, 0.161626, -0.5443, 0.6383, -0.5443, 0.303397, -0.081537, 0.303397, 0.984039, 0.713455, 0.5536, -0.6222, 0.5536, -0.303397, -0.081537, 0.303397, 0.937433, 0.825972, -0.5536, -0.6222, 0.5536, -0.303397, -0.081537, -0.303397, 0.824916, 0.779366, -0.5536, -0.6222, -0.5536, -0.719437, 9.42605, 0.26575, 0.218508, 0.671661, -1, -0, -0, -0.719437, 8.89455, -0.26575, 0.116304, 0.769693, -1, -0, -0, -0.719437, 8.89455, 0.26575, 0.11839, 0.669576, -1, -0, -0, -0.719437, 9.42605, -0.26575, 0.420561, 0.984603, 0.0219, -0, -0.9998, 0.411845, 8.91934, -0.240969, 0.52045, 0.773441, 0.0219, -0, -0.9998, -0.719437, 8.89455, -0.26575, 0.520679, 0.986688, 0.0219, -0, -0.9998, 0.411845, 9.40127, -0.240969, 0.429669, 0.77155, 1, -0, -0, 0.411845, 8.91934, 0.240969, 0.522341, 0.68266, 1, -0, -0, 0.411845, 8.91934, -0.240969, 0.52045, 0.773441, 1, -0, -0, 0.411845, 9.40127, 0.240969, 0.43156, 0.680769, 0.0219, -0, 0.9998, -0.719437, 8.89455, 0.26575, 0.531449, 0.469608, 0.0219, -0, 0.9998, 0.411845, 8.91934, 0.240969, 0.522341, 0.68266, 0.0219, -0, 0.9998, 0.411845, 8.91934, -0.240969, 0.52045, 0.773441, 0.0219, -0.9998, -0, -0.719437, 8.89455, 0.26575, 0.735587, 0.682432, 0.0219, -0.9998, -0, -0.719437, 8.89455, -0.26575, 0.733502, 0.782549, 0.0219, -0.9998, -0, -0.719437, 9.42605, -0.26575, 0.216422, 0.771779, 0.0219, 0.9998, -0, 0.411845, 9.40127, 0.240969, 0.43156, 0.680769, 0.0219, 0.9998, -0, 0.411845, 9.40127, -0.240969, 0.429669, 0.77155, 0.0219, 0.9998, -0, -0.235877, 8.9414, 0, 0.999903, 0.390787, -0.7698, 0.6383, -0, 0.16679, 8.9414, -0.16679, 0.850537, 0.913802, 0.5443, 0.6383, -0.5443, -0, 8.9414, -0.235877, 0.824916, 0.888181, -0, 0.6383, -0.7698, -0.16679, 8.9414, -0.16679, 0.824916, 0.851947, -0.5443, 0.6383, -0.5443, -0.16679, 8.9414, 0.16679, 0.886771, 0.826325, -0.5443, 0.6383, 0.5443, 0.16679, 8.9414, 0.16679, 0.912392, 0.888181, 0.5443, 0.6383, 0.5443, 0, -0.081537, -0.429068, 0.824916, 0.713455, -0, -0.6222, -0.7829, 0.303397, -0.081537, -0.303397, 0.871522, 0.666849, 0.5536, -0.6222, -0.5536, 0.429068, -0.081537, 0, 0.937433, 0.666849, 0.7829, -0.6222, -0, -0, -0.081537, 0.429068, 0.984039, 0.779366, -0, -0.6222, 0.7829, -0.429068, -0.081537, 0, 0.871522, 0.825972, -0.7829, -0.6222, -0, -0.719437, 9.42605, -0.26575, 0.216422, 0.771779, -1, -0, -0, 0.411845, 9.40127, -0.240969, 0.429669, 0.77155, 0.0219, -0, -0.9998, 0.411845, 9.40127, 0.240969, 0.43156, 0.680769, 1, -0, -0, -0.719437, 9.42605, 0.26575, 0.431331, 0.467522, 0.0219, -0, 0.9998, 0.411845, 8.91934, 0.240969, 0.522341, 0.68266, 0.0219, -0.9998, -0, -0.719437, 9.42605, 0.26575, 0.218508, 0.671661, 0.0219, 0.9998, -0,  ];
    indices = [ 0, 1, 2, 3, 4, 1, 5, 6, 4, 7, 8, 6, 9, 10, 8, 11, 12, 10, 13, 14, 15, 16, 17, 18, 19, 2, 17, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 0, 3, 1, 3, 5, 4, 5, 7, 6, 7, 9, 8, 9, 11, 10, 11, 41, 12, 15, 42, 43, 43, 44, 13, 13, 45, 14, 14, 46, 15, 15, 43, 13, 16, 19, 17, 19, 0, 2, 22, 47, 48, 48, 49, 20, 20, 50, 21, 21, 51, 22, 22, 48, 20, 23, 52, 24, 26, 53, 27, 29, 54, 30, 32, 55, 33, 35, 56, 36, 38, 57, 39,  ];
}