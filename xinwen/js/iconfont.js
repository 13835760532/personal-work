;(function(window) {

var svgSprite = '<svg>' +
  ''+
    '<symbol id="icon-qq" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M199.605076 467.540416 197.926785 462.370673 196.584152 455.590246 195.643695 451.863365 195.643695 447.196065 195.643695 441.62314 195.643695 436.588473 197.255468 430.612365 198.934783 424.234097 201.08279 417.620469 204.004449 410.201499 207.864518 402.479631 213.303614 394.758786 213.303614 389.352659 213.839848 384.2832 214.646246 377.401466 216.995854 369.71439 219.144885 361.355001 220.856946 357.493044 222.837125 353.936031 225.389355 349.940021 228.142161 347.019505 228.142161 341.581656 228.142161 335.471494 228.142161 327.884702 229.753935 318.081429 231.364685 306.666448 234.252573 292.970518 238.213954 278.80182 241.16836 270.946922 244.088995 262.452457 247.278771 254.497275 251.106093 246.003833 254.999933 236.704027 259.499595 227.976248 264.535491 218.642672 270.91402 209.376635 273.834655 204.073862 276.990661 199.674669 283.806159 189.838649 290.788464 180.036399 298.778766 169.963996 307.306326 160.094208 316.572743 150.426011 326.241336 140.488685 337.924902 129.746016 345.37897 123.233696 354.408993 116.183116 363.575123 109.938901 373.511833 103.963817 383.047391 98.658997 393.790499 94.294596 405.204924 88.856747 416.551808 85.129866 427.899716 81.268932 440.120539 77.441766 452.341363 74.521251 465.233502 72.136947 478.258677 69.989027 491.084299 68.277036 503.975416 66.531276 517.673954 65.75868 530.698105 65.75868 544.196067 65.75868 558.161699 65.75868 571.659661 67.470671 585.22107 69.083401 599.052643 70.526263 611.878266 73.614601 625.440698 76.501348 638.166032 79.792301 652.098917 83.551928 664.856998 88.050382 677.075775 93.220125 690.10402 98.658997 702.020909 104.634082 713.570416 111.281479 724.883529 118.600165 734.686181 125.347846 739.185843 129.20878 743.954645 131.961474 753.017416 139.683343 760.674107 147.136082 768.260186 154.824181 775.714254 163.316599 781.823642 171.541935 789.075087 180.036399 794.178524 189.167361 799.314709 197.292412 804.787574 206.724225 809.286213 214.950584 816.940857 232.339626 820.699614 241.337557 823.622297 249.730715 826.541909 258.726599 829.16168 267.254833 831.041571 274.538727 833.391178 283.167245 837.555181 298.543444 840.2077 311.971267 841.917714 324.996932 843.396452 335.471494 845.747083 351.384929 846.283318 353.936031 848.162185 356.822778 853.200128 365.080859 856.421627 370.621039 859.309516 376.494817 863.002779 382.706285 866.225302 390.160047 868.305769 397.847124 870.588859 406.206512 872.334691 414.834007 873.141089 419.063331 873.812405 424.234097 873.812405 428.765297 873.141089 433.29752 873.141089 438.871469 871.797433 444.309318 869.382331 454.784904 866.627478 460.0887 864.614553 466.063785 864.614553 467.540416 865.553986 469.388507 868.305769 473.78463 880.259499 491.443825 889.725469 504.671081 894.225131 513.601474 900.335542 523.268648 905.638532 533.878287 911.750991 545.291221 917.860379 558.049802 924.743418 572.518329 928.602464 581.415976 932.161669 590.009701 935.25218 599.209224 938.274127 607.398744 940.556194 616.061031 942.904778 624.152313 945.859184 639.963417 948.209814 656.144958 949.820564 670.445662 949.820564 678.301584 949.820564 684.680874 949.820564 690.655959 948.746049 697.840592 947.20284 710.162222 945.054832 721.306027 941.763744 731.378429 940.556194 735.50747 938.274127 740.409107 936.324649 743.867882 933.773442 748.129952 931.489329 750.783385 928.602464 754.241137 926.051257 756.992807 923.300498 759.409856 920.008387 760.854764 917.052957 762.297626 914.637856 763.102968 912.522595 763.102968 910.943569 763.102968 908.561215 762.297626 904.027782 760.081145 901.948339 758.603491 899.799308 756.992807 897.413883 754.877633 895.031529 752.495376 891.070148 748.129952 886.368887 741.885737 882.675624 735.50747 878.983384 730.337727 875.391432 724.361619 870.320742 713.754027 864.614553 702.70846 863.943236 702.338023 863.002779 702.338023 860.652149 704.050014 859.309516 706.97053 857.09499 710.530612 853.200128 721.306027 847.357833 736.581941 839.837248 754.877633 834.198599 764.042363 828.254994 773.576507 821.236872 784.320199 813.783828 794.861276 809.957529 799.62886 805.324832 804.799626 794.680988 815.273165 795.622468 816.21256 797.064366 817.690214 802.369403 820.84609 824.528983 831.454706 834.198599 836.893578 843.396452 842.197374 852.527788 848.844771 860.652149 855.760275 864.614553 858.814844 867.569982 862.407672 870.588859 866.502943 873.141089 871.035166 874.485769 874.761024 876.163036 879.259478 876.836399 883.087667 877.639727 887.618866 876.836399 890.675482 876.836399 893.695259 876.163036 896.918673 874.485769 899.806443 873.812405 902.088416 872.334691 904.84111 868.305769 910.313751 864.614553 914.711921 861.727687 918.000827 859.309516 920.417877 853.200128 924.916331 846.283318 928.777265 838.898837 932.504146 831.041571 936.062182 822.178352 939.487188 817.479138 940.962795 813.247593 942.172343 803.040719 944.555623 792.431669 946.80485 781.823642 949.08887 770.275159 950.935937 758.323476 951.438381 746.101629 952.915012 734.014865 952.915012 721.257807 952.915012 708.164067 952.915012 694.467576 952.10967 681.708472 950.935937 668.01198 949.08887 654.382007 947.611216 640.013176 945.597349 626.113038 942.172343 612.550605 939.487188 599.052643 935.660023 585.22107 930.758386 571.659661 926.629345 564.540228 924.245042 558.161699 921.962046 554.133801 920.417877 550.171397 919.612535 545.000419 919.612535 538.89103 919.612535 525.866879 918.67314 519.251957 918.000827 510.758167 917.062456 505.319072 921.962046 497.865004 926.629345 487.794235 931.563728 476.647927 937.674912 469.866199 940.962795 462.815331 943.616228 447.170384 949.995519 438.676595 952.10967 429.78063 954.526719 417.425748 956.877253 409.703563 957.547519 401.511661 958.218808 392.984101 959.160249 383.047391 959.562409 373.511833 959.562409 363.575123 959.562409 342.457311 959.562409 319.527149 959.160249 297.302075 956.877253 286.021708 955.332061 275.143518 953.721377 264.535491 952.10967 253.926441 949.995519 244.088995 946.80485 234.252573 944.555623 225.389355 940.962795 216.995854 937.674912 209.207151 933.914262 202.426446 929.818991 195.643695 924.916331 193.361629 922.500305 190.339682 919.612535 188.056592 917.062456 185.975102 914.174686 184.094188 911.220401 182.617497 908.33263 180.502236 902.088416 179.730632 898.898771 178.790175 895.306966 178.790175 892.016013 179.730632 888.291179 179.730632 884.564297 180.502236 880.83844 180.502236 878.588189 180.502236 873.420493 180.871665 869.422436 182.617497 864.891236 184.094188 860.392782 186.7815 854.954933 188.727908 852.838735 190.339682 850.456479 194.569179 845.285712 197.926785 842.599534 201.08279 840.753489 204.004449 838.371232 208.669893 836.893578 212.363157 834.676074 216.995854 832.260048 222.30089 830.681086 227.604904 829.070402 233.715315 827.759547 239.556586 826.954205 246.473396 826.015833 253.926441 825.477574 255.906619 824.807309 256.308795 824.807309 257.250276 824.001967 257.250276 823.129086 255.906619 821.24825 251.911468 819.368436 241.974758 810.774711 235.327089 805.469891 227.604904 798.688441 219.816201 791.134395 211.69184 781.433452 202.426446 770.555707 198.934783 764.713652 194.301062 758.603491 190.339682 751.554958 186.7815 743.867882 181.94618 736.581941 178.790175 728.187761 175.063141 719.863165 171.33713 710.530612 168.584324 701.667757 166.033117 690.655959 165.227742 690.252777 164.455114 690.252777 164.051915 689.446411 163.111458 689.446411 161.533455 690.252777 160.72808 690.655959 159.654588 692.503027 159.251389 694.752254 158.446014 696.767144 157.03584 700.05605 152.469661 708.180078 150.11903 713.082738 146.39302 717.312062 142.397869 722.481805 138.032265 728.187761 133.399568 733.259266 127.960473 738.15988 122.89183 742.792387 117.352446 746.385215 111.242035 750.245126 105.400764 752.495376 98.484977 754.241137 91.703249 754.877633 91.031933 754.877633 90.091476 754.877633 88.547243 754.241137 87.337646 751.554958 85.323697 750.245126 82.704949 743.867882 81.094199 740.409107 79.348367 735.50747 77.904423 730.337727 77.131795 725.301014 74.982764 713.754027 74.177389 706.97053 74.177389 700.05605 74.177389 684.680874 74.982764 668.097174 76.32642 659.56894 77.904423 650.841162 79.348367 641.407302 81.899574 632.644731 84.786439 622.540605 87.740845 612.736309 91.703249 602.632183 95.42926 592.962963 100.565444 583.127967 105.400764 572.518329 111.242035 562.548256 118.124051 551.805588 125.141149 542.135344 132.460135 531.393699 138.570547 523.94096 146.39302 515.312442 154.618692 506.684948 158.446014 502.589676 163.111458 497.922377 169.859416 492.048599 176.776226 486.10626 188.056592 476.001111 196.584152 469.789643Z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-weixin" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M669.102572 367.837646c10.238179 0 20.366863 0.751107 30.413684 1.86958-27.328415-127.249149-163.367765-221.791385-318.656527-221.791385-173.60492 0-315.815829 118.336152-315.815829 268.599458 0 86.735433 47.312562 157.962661 126.375246 213.20687l-31.587416 95.003747 110.404506-55.363935c39.503712 7.819083 71.200622 15.861246 110.62247 15.861246 9.910721 0 19.739577-0.491187 29.485545-1.257643-6.170536-21.115923-9.745968-43.230594-9.745968-66.174142C400.599306 479.812927 519.083837 367.837646 669.102572 367.837646zM499.292072 282.208407c23.778566 0 39.530318 15.643282 39.530318 39.409568 0 23.669072-15.751752 39.531342-39.530318 39.531342-23.671119 0-47.422056-15.861246-47.422056-39.531342C451.870016 297.852712 475.620953 282.208407 499.292072 282.208407zM278.264073 361.149317c-23.670096 0-47.558156-15.861246-47.558156-39.531342 0-23.766286 23.887037-39.409568 47.558156-39.409568 23.669072 0 39.421848 15.643282 39.421848 39.409568C317.685921 345.288071 301.933145 361.149317 278.264073 361.149317z"  ></path>'+
      ''+
      '<path d="M957.344393 613.995999c0-126.266775-126.347616-229.190913-268.257673-229.190913-150.264329 0-268.611737 102.925161-268.611737 229.190913 0 126.484739 118.347408 229.189889 268.611737 229.189889 31.451316 0 63.173808-7.930623 94.762247-15.84692l86.623893 47.434336-23.75196-78.92556C910.113695 748.287541 957.344393 685.223227 957.344393 613.995999zM601.996199 574.47796c-15.725146 0-31.586392-15.643282-31.586392-31.601742 0-15.737426 15.861246-31.586392 31.586392-31.586392 23.89113 0 39.533388 15.848966 39.533388 31.586392C641.529587 558.834678 625.887328 574.47796 601.996199 574.47796zM775.712659 574.47796c-15.616676 0-31.368428-15.643282-31.368428-31.601742 0-15.737426 15.752776-31.586392 31.368428-31.586392 23.669072 0 39.531342 15.848966 39.531342 31.586392C815.244001 558.834678 799.381731 574.47796 775.712659 574.47796z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-mima" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M500.363636 605.090909l23.272727 0C542.906182 605.090909 558.545455 620.730182 558.545455 640l0 162.909091c0 19.269818-15.639273 34.909091-34.932364 34.909091l-23.272727 0c-19.293091 0-34.909091-15.639273-34.909091-34.909091l0-162.909091C465.454545 620.730182 481.070545 605.090909 500.363636 605.090909z"  ></path>'+
      ''+
      '<path d="M884.363636 488.727273l0 419.746909C884.363636 933.678545 863.511273 954.181818 837.818182 954.181818L186.181818 954.181818c-25.669818 0-46.545455-20.503273-46.545455-45.707636L139.636364 488.727273 884.363636 488.727273M954.181818 418.909091 69.818182 418.909091l0 489.565091C69.818182 972.288 121.902545 1024 186.181818 1024l651.636364 0c64.279273 0 116.363636-51.712 116.363636-115.525818L954.181818 418.909091 954.181818 418.909091z"  ></path>'+
      ''+
      '<path d="M861.090909 418.909091l-69.818182 0 0-69.818182c0-156.997818-131.095273-279.272727-279.272727-279.272727-151.831273 0-279.272727 127.418182-279.272727 279.272727l0 69.818182L162.909091 418.909091l0-69.818182C162.909091 158.743273 321.652364 0 512 0c187.950545 0 349.090909 152.273455 349.090909 349.090909L861.090909 418.909091z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-ren" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M857.805864 729.340003c-37.021172-86.764086-105.755626-155.599847-193.168488-193.163371-18.34788-7.887644-36.710087-13.985526-55.066153-18.358113 21.852704-9.612938 41.512463-24.026206 58.56279-41.079604C707.906855 436.96505 728.444611 389.331169 728.444611 332.514139c0-56.80782-20.538779-105.317651-60.310597-145.091516-39.771819-39.773865-87.406722-60.313667-144.219659-60.313667-56.81396 0-104.668875 20.324908-145.094586 60.313667-39.989783 39.559994-60.310597 88.283696-60.310597 145.091516 0 56.81703 20.23588 104.758925 60.310597 144.224776 17.61417 17.35118 37.585013 31.466666 59.436694 41.079604-19.22997 4.372587-37.615713 10.414187-55.940057 18.358113-86.562495 37.508265-156.026566 106.809631-192.294584 193.163371-18.799158 44.76146-28.843932 91.780333-28.843932 140.728138l0 31.466666 724.600049 0 0-31.466666C885.775892 821.120336 876.723725 773.681908 857.805864 729.340003zM422.521083 433.906387c-28.189016-28.632107-41.954531-62.057381-41.954531-101.392248 0-39.326681 14.201443-73.198116 41.954531-101.383038 28.189016-28.632107 62.059428-42.832528 101.392248-42.832528 39.33282 0 73.201186 14.199397 101.391225 42.832528 27.753087 28.184923 41.955554 62.057381 41.955554 101.383038 0 39.33589-13.766538 72.760141-41.955554 101.392248-27.752064 28.184923-62.058404 41.955554-101.391225 41.955554C484.58051 475.861942 450.27417 462.09131 422.521083 433.906387zM224.108151 839.477426c6.992251-70.802556 35.836183-131.116223 86.532819-181.807742 58.561767-58.560744 129.361253-88.283696 212.397435-88.283696 83.037205 0 154.708548 29.722952 213.271338 88.283696 50.695612 50.691519 79.540567 111.005186 87.406722 181.807742L224.108151 839.477426z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-weibo" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M755.78368 487.02464c-39.66464-7.66464-20.34688-28.61056-20.34688-28.61056s38.79936-63.18592-7.76192-109.17888c-57.58976-56.8832-197.7856 7.16288-197.7856 7.16288-53.46304 16.34304-39.3216-7.49568-31.73376-48.03584 0-47.85664-16.55296-128.75264-159.16032-81.07008C196.5568 275.49184 74.2912 443.93472 74.2912 443.93472c-85.01248 111.8976-73.79968 198.41536-73.79968 198.41536 21.20704 191.09888 226.93376 243.5584 386.95936 255.98976 168.30976 12.94848 395.58656-57.23136 464.384-201.65632C920.81152 552.08448 795.61728 494.85824 755.78368 487.02464L755.78368 487.02464 755.78368 487.02464zM399.86176 844.5184c-167.09632 7.66464-302.28992-74.93632-302.28992-184.96 0-110.19776 135.18848-198.42048 302.28992-206.09024 167.2704-7.66464 302.63808 60.46208 302.63808 170.3168C702.49984 733.6448 567.13216 837.02272 399.86176 844.5184L399.86176 844.5184 399.86176 844.5184zM366.58176 525.85984c-168.13568 19.40992-148.64896 174.7456-148.64896 174.7456s-1.72032 49.21856 45.00992 74.26048c98.29376 52.62848 199.68512 20.77696 250.7264-44.45696C564.88448 665.34912 534.8864 506.60864 366.58176 525.85984L366.58176 525.85984 366.58176 525.85984zM324.16256 744.03328c-31.3856 3.57376-56.73472-14.3104-56.73472-40.20224 0-25.71776 22.41536-52.79744 53.79584-56.02816 36.0448-3.40992 59.4944 17.03424 59.4944 43.08992C380.89216 716.61568 355.37408 740.45952 324.16256 744.03328L324.16256 744.03328 324.16256 744.03328zM423.31648 660.75136c-10.69056 7.82848-23.79264 6.8096-29.31712-2.72384-5.85728-9.20576-3.61984-23.84896 7.07072-31.5136 12.416-9.20064 25.34912-6.47168 31.03744 2.72384C437.632 638.43328 433.65888 652.5696 423.31648 660.75136L423.31648 660.75136 423.31648 660.75136zM837.69344 419.74784c13.6192 0 25.00096-9.8816 27.07456-22.81984 0.17408-1.024 0.34304-1.87392 0.34304-2.90304 20.52608-182.0672-151.22944-150.72768-151.22944-150.72768-15.17568 0-27.42272 12.08832-27.42272 27.4176 0 14.99136 12.24704 27.07968 27.42272 27.07968 123.29472-26.91584 96.22528 94.86336 96.22528 94.86336C809.9328 407.6544 822.34368 419.74784 837.69344 419.74784L837.69344 419.74784 837.69344 419.74784zM817.6896 101.9392c-59.32032-13.79328-120.54016-1.87392-137.61024 1.3568-1.3824 0.17408-2.5856 1.37216-3.79392 1.536-0.51712 0.17408-1.03424 0.68096-1.03424 0.68096-16.896 4.77184-29.14304 20.096-29.14304 38.3232 0 21.62688 17.76128 39.51104 40.00768 39.51104 0 0 21.5552-2.89792 36.21888-8.51456 14.47936-5.7856 137.6-4.25472 198.64576 96.91136 33.29024 73.91744 14.66368 123.31008 12.25216 131.31264 0 0-7.936 19.2512-7.936 38.14912 0 21.80096 17.7664 35.59936 40.00768 35.59936 18.45248 0 33.97632-2.55488 38.45632-33.3824l0.17408 0C1069.80352 227.63008 923.91424 126.29504 817.6896 101.9392L817.6896 101.9392 817.6896 101.9392zM817.6896 101.9392"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-douban-copy" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M88.857259 73.712839l846.289576 0 0 95.330182L88.857259 169.043021 88.857259 73.712839 88.857259 73.712839zM861.590562 641.176035 861.590562 268.490987 162.408415 268.490987 162.408415 641.176035 861.590562 641.176035 861.590562 641.176035zM263.817036 363.759771l497.42198 0 0 182.198645L263.817036 545.958416 263.817036 363.759771 263.817036 363.759771zM710.336696 855.990518c30.423917-46.571688 59.132772-100.582813 85.73771-161.891134l-101.701287-37.07029c-26.442232 72.646554-57.259098 139.072429-92.290963 198.960401L425.078837 855.989495c-29.362748-77.615729-62.451354-143.992485-99.591229-198.960401l-93.54042 37.07029c38.588877 57.881268 69.668733 111.76141 93.54042 161.891134L64.886311 855.990518l0 94.296643 894.226355 0 0-94.296643L710.336696 855.990518 710.336696 855.990518zM710.336696 855.990518"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-audience" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M1003.988341 695.804031c0 47.254822-38.308713 85.571473-85.563535 85.571473H105.575194c-47.254822 0-85.563535-38.316651-85.563535-85.571473 0-47.254822 38.308713-85.563535 85.563535-85.563535h812.849612c47.254822 0 85.563535 38.308713 85.563535 85.571473z" fill="#DBD8D2" ></path>'+
      ''+
      '<path d="M351.573333 267.986357a74.863132 74.863132 0 1 1-149.734201 0 74.863132 74.863132 0 0 1 149.726263 0z m395.724403-74.863132a74.863132 74.863132 0 1 0 0 149.734201 74.863132 74.863132 0 0 0 0-149.734201z" fill="#B2D1D8" ></path>'+
      ''+
      '<path d="M405.043597 532.027535v136.374574H148.36093v-136.374574c0-70.878264 57.471008-128.341333 128.349272-128.341333 70.886202 0 128.341333 57.46307 128.341333 128.349271z m-139.041737-317.51938a42.785736 42.785736 0 1 0 0 85.571473 42.785736 42.785736 0 0 0 0-85.571473z m481.295876 189.178047c-70.886202 0-128.341333 57.471008-128.341333 128.349271v136.366636h256.682667V532.035473c0-70.886202-57.455132-128.349271-128.341334-128.349271z m-10.692465-189.170109a42.785736 42.785736 0 1 0 0 85.563535 42.785736 42.785736 0 0 0 0-85.571473z" fill="#CFDFE2" ></path>'+
      ''+
      '<path d="M403.61476 512.777922c0.94462 6.278946 1.428837 12.708713 1.428837 19.257551v153.076093H148.36093V572.677953a98.843783 98.843783 0 0 0 82.888434 44.913117c54.645085 0 98.939039-44.293953 98.939039-98.931101 0-45.468775 66.663194-50.858667 73.426357-5.882047z m397.161178 5.882047c0 54.637147-44.293953 98.931101-98.931101 98.931101a98.843783 98.843783 0 0 1-82.888434-44.913117v112.433613h256.690605V532.027535c0-6.540899-0.492155-12.970667-1.436775-19.257551-6.771101-44.968682-73.434295-39.586729-73.434295 5.889985z" fill="#B2D1D8" ></path>'+
      ''+
      '<path d="M624.901953 134.898109c0 62.360806-50.549085 112.909891-112.901953 112.909891S399.098047 197.258915 399.098047 134.898109C399.098047 72.553178 449.639194 21.996155 512 21.996155c62.360806 0 112.901953 50.549085 112.901953 112.901954z" fill="#A384E2" ></path>'+
      ''+
      '<path d="M705.551876 494.147473v217.381705H318.448124V494.139535c0-100.415504 81.404031-181.819535 181.819535-181.819535h23.464682c100.415504 0 181.819535 81.404031 181.819535 181.819535zM495.870016 54.256124a64.512 64.512 0 1 0 0 129.031938 64.512 64.512 0 0 0 0-129.031938z" fill="#B69CF7" ></path>'+
      ''+
      '<path d="M703.384806 476.834729c1.428837 9.470016 2.16707 19.170233 2.16707 29.045085v205.649364H318.448124V567.184868c26.631938 40.777426 72.66431 67.726884 124.999442 67.726884 82.396279 0 149.194419-66.790202 149.194418-149.194419 0-68.584186 100.542512-76.696806 110.742822-8.882604z" fill="#A384E2" ></path>'+
      ''+
      '<path d="M736.605271 695.804031c0 124.046884-100.558388 224.605271-224.605271 224.605271-124.046884 0-224.605271-100.558388-224.605271-224.605271 0-124.046884 100.558388-224.597333 224.605271-224.597333 124.046884 0 224.605271 100.55045 224.605271 224.597333z" fill="#FC8059" ></path>'+
      ''+
      '<path d="M512 546.069829c-82.697922 0-149.734202 67.036279-149.734202 149.734202S429.302078 845.554109 512 845.554109s149.734202-67.044217 149.734202-149.74214c0-82.697922-67.036279-149.734202-149.734202-149.734202z m0 192.519938a42.785736 42.785736 0 1 1 0-85.563534 42.785736 42.785736 0 0 1 0 85.563534z" fill="#FFFFFF" ></path>'+
      ''+
      '<path d="M276.702264 358.900093c50.128372 0 90.913736-40.777426 90.913736-90.913736 0-50.128372-40.785364-90.905798-90.913736-90.905799-50.128372 0-90.913736 40.777426-90.913737 90.913737 0 50.128372 40.785364 90.905798 90.913737 90.905798z m0-149.734202c32.434605 0 58.820465 26.38586 58.820465 58.820466 0 32.442543-26.38586 58.828403-58.820465 58.828403s-58.820465-26.393798-58.820466-58.820465c0-32.442543 26.38586-58.828403 58.820466-58.828404zM918.424806 594.197829h-37.435535v-62.170294c0-79.617984-64.773953-144.384-144.391938-144.384a143.995039 143.995039 0 0 0-42.309457 6.310698c-34.434977-58.399752-97.986481-97.676899-170.555535-97.6769h-23.464682c-73.934388 0-138.517829 40.769488-172.476527 101.002915a16.177612 16.177612 0 0 0-2.95293-1.397085 143.875969 143.875969 0 0 0-48.135938-8.239628c-79.617984 0-144.391938 64.773953-144.391938 144.391938v62.162356H105.575194c-56.026295 0-101.606202 45.579907-101.606202 101.606202 0 56.026295 45.579907 101.606202 101.606202 101.606202h188.312806c36.228961 77.466791 112.528868 132.572279 202.069333 138.494015v70.068589a16.034729 16.034729 0 1 0 32.085334 0v-70.068589c89.540465-5.921736 165.832434-61.035163 202.069333-138.494015H918.424806c56.026295 0 101.606202-45.579907 101.606202-101.606202 0-56.026295-45.579907-101.606202-101.606202-101.606202zM736.605271 419.728868c61.916279 0 112.298667 50.382388 112.298667 112.306605v147.725891H752.100217a238.909519 238.909519 0 0 0-30.505674-102.08248V494.155411c0-24.957023-4.659597-48.842419-13.129427-70.85445a112.282791 112.282791 0 0 1 28.140155-3.564155z m-59.614263 260.032496c-7.588713-78.625736-70.322605-141.359628-148.948341-148.940403v-42.960372c102.24124 7.810977 184.097736 89.659535 191.900775 191.900775h-42.952434z m-41.991938 32.085334h9.692279c-7.318822 60.916093-55.732589 109.32986-116.648682 116.65662v-15.050419a16.034729 16.034729 0 1 0-32.085334 0v15.050419c-60.908155-7.32676-109.32986-55.740527-116.65662-116.65662h9.700217a16.034729 16.034729 0 1 0 0-32.085334h-9.700217c7.32676-60.908155 55.748465-109.32986 116.65662-116.648682v15.042481a16.034729 16.034729 0 1 0 32.085334 0V563.12062c60.916093 7.318822 109.32986 55.740527 116.648682 116.648682h-9.692279a16.034729 16.034729 0 1 0 0 32.085334z m-330.95045-32.085334C311.867535 577.520124 393.724031 495.671566 495.965271 487.868527v42.960372c-78.625736 7.588713-141.359628 70.314667-148.948341 148.948341h-42.960372z m196.226977-351.390759h23.456744c91.405891 0 165.776868 74.370977 165.776868 165.776868v39.348589c-40.642481-44.413023-97.700713-73.56924-161.458604-77.792248v-70.068589a16.034729 16.034729 0 1 0-32.093272 0v70.068589c-63.757891 4.223008-120.816124 33.371287-161.458604 77.792248v-39.348589c-0.007938-91.413829 74.355101-165.776868 165.76893-165.776868zM164.395659 532.035473c0-61.924217 50.382388-112.306605 112.306605-112.306605 12.835721 0 25.433302 2.159132 37.427596 6.398016 0.095256 0.03969 0.190512 0.055566 0.285768 0.087318a196.941395 196.941395 0 0 0-12.018109 67.933271v83.539349a238.949209 238.949209 0 0 0-30.505674 102.08248H164.395659V532.027535z m-58.820465 233.297364c-38.340465 0-69.520868-31.196279-69.520868-69.528806 0-38.332527 31.188341-69.520868 69.520868-69.520868h26.74307v53.478201h-21.392869a16.034729 16.034729 0 1 0 0 32.085334h160.982326a239.147659 239.147659 0 0 0 9.700217 53.478201H105.575194z m198.473426-53.486139h42.96831c7.580775 78.625736 70.314667 141.359628 148.940403 148.948341v42.960372c-102.24124-7.810977-184.089798-89.667473-191.900775-191.908713z m223.994047 191.908713v-42.960372c78.625736-7.588713 141.359628-70.322605 148.948341-148.948341h42.960372c-7.810977 102.24124-89.675411 184.097736-191.908713 191.908713zM918.424806 765.324899H742.392062a239.147659 239.147659 0 0 0 9.708155-53.470263h160.982326a16.034729 16.034729 0 1 0 0-32.093272h-32.093272v-53.470263h37.435535c38.340465 0 69.520868 31.180403 69.520868 69.520868 0 38.324589-31.188341 69.51293-69.520868 69.51293z m-181.819535-406.424806c50.128372 0 90.913736-40.777426 90.913737-90.913736 0-50.128372-40.785364-90.905798-90.913737-90.905799-50.13631 0-90.913736 40.777426-90.913736 90.913737 0 50.128372 40.785364 90.905798 90.913736 90.905798z m0-149.734202c32.434605 0 58.820465 26.38586 58.820465 58.820466 0 32.442543-26.38586 58.828403-58.820465 58.828403s-58.820465-26.393798-58.820465-58.820465c0-32.442543 26.38586-58.828403 58.820465-58.828404zM512 263.850667c71.100527 0 128.952558-57.844093 128.952558-128.952558C640.952558 63.797581 583.100527 5.953488 512 5.953488S383.047442 63.797581 383.047442 134.898109 440.899473 263.858605 512 263.858605z m0-225.811845c53.40676 0 96.859287 43.452527 96.859287 96.859287 0 53.414698-43.452527 96.867225-96.859287 96.867224s-96.859287-43.452527-96.859287-96.867224c0-53.40676 43.452527-96.859287 96.859287-96.859287z m0 598.944744c-32.434605 0-58.820465 26.38586-58.820465 58.820465s26.38586 58.820465 58.820465 58.820465 58.820465-26.38586 58.820465-58.820465-26.38586-58.820465-58.820465-58.820465z m0 85.563535a26.766884 26.766884 0 0 1-26.735132-26.74307A26.766884 26.766884 0 0 1 512 669.068899a26.766884 26.766884 0 0 1 26.735132 26.735132A26.766884 26.766884 0 0 1 512 722.547101z" fill="#4C4C4C" ></path>'+
      ''+
    '</symbol>'+
  ''+
'</svg>'
var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
var shouldInjectCss = script.getAttribute("data-injectcss")

/**
 * document ready
 */
var ready = function(fn){
  if(document.addEventListener){
      document.addEventListener("DOMContentLoaded",function(){
          document.removeEventListener("DOMContentLoaded",arguments.callee,false)
          fn()
      },false)
  }else if(document.attachEvent){
     IEContentLoaded (window, fn)
  }

  function IEContentLoaded (w, fn) {
      var d = w.document, done = false,
      // only fire once
      init = function () {
          if (!done) {
              done = true
              fn()
          }
      }
      // polling for no errors
      ;(function () {
          try {
              // throws errors until after ondocumentready
              d.documentElement.doScroll('left')
          } catch (e) {
              setTimeout(arguments.callee, 50)
              return
          }
          // no errors, fire

          init()
      })()
      // trying to always fire before onload
      d.onreadystatechange = function() {
          if (d.readyState == 'complete') {
              d.onreadystatechange = null
              init()
          }
      }
  }
}

/**
 * Insert el before target
 *
 * @param {Element} el
 * @param {Element} target
 */

var before = function (el, target) {
  target.parentNode.insertBefore(el, target)
}

/**
 * Prepend el to target
 *
 * @param {Element} el
 * @param {Element} target
 */

var prepend = function (el, target) {
  if (target.firstChild) {
    before(el, target.firstChild)
  } else {
    target.appendChild(el)
  }
}

function appendSvg(){
  var div,svg

  div = document.createElement('div')
  div.innerHTML = svgSprite
  svg = div.getElementsByTagName('svg')[0]
  if (svg) {
    svg.setAttribute('aria-hidden', 'true')
    svg.style.position = 'absolute'
    svg.style.width = 0
    svg.style.height = 0
    svg.style.overflow = 'hidden'
    prepend(svg,document.body)
  }
}

if(shouldInjectCss && !window.__iconfont__svg__cssinject__){
  window.__iconfont__svg__cssinject__ = true
  try{
    document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
  }catch(e){
    console && console.log(e)
  }
}

ready(appendSvg)


})(window)
