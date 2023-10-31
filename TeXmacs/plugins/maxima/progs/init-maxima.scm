
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;
;; MODULE      : init-maxima.scm
;; DESCRIPTION : Initialize maxima plugin
;; COPYRIGHT   : (C) 1999  Joris van der Hoeven
;;
;; This software falls under the GNU general public license version 3 or later.
;; It comes WITHOUT ANY WARRANTY WHATSOEVER. For details, see the file LICENSE
;; in the root directory or <http://www.gnu.org/licenses/gpl-3.0.html>.
;;
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(define (maxima-serialize lan t)
  (with s (string-drop-right (verbatim-serialize lan t) 1)
    (cond ((== s "") "0;\n")
          ((in? (string-ref s (- (string-length s) 1)) '(#\; #\$))
           (string-append s "\n"))
          (else (string-append s ";\n")))))

(define (maxima-entry)
  (if (url-exists? "$TEXMACS_HOME_PATH/plugins/maxima")
      (system-url->string "$TEXMACS_HOME_PATH/plugins/maxima/lisp/texmacs-maxima.lisp")
      (system-url->string "$TEXMACS_PATH/plugins/maxima/lisp/texmacs-maxima.lisp")))

(define (maxima-launchers)
  (if (or (os-mingw?) (os-win32?))
      `((:launch ,(string-append "maxima.bat -p " (maxima-entry))))
      `((:launch ,(string-append "maxima -p " (maxima-entry))))))

(plugin-add-macos-path "Maxima*" "Contents/Resources/maxima/bin" #t)
(plugin-add-macos-path "Maxima*" "Contents/Resources/opt/bin" #t)
(plugin-add-macos-path "/opt/homebrew/opt" "maxima/bin" #t)
(plugin-add-windows-path "Maxima*" "bin" #t)
(plugin-add-windows-path "maxima*" "bin" #t)

(plugin-configure maxima
  (:require (or (url-exists-in-path? "maxima.bat") (url-exists-in-path? "maxima")))
  ,@(maxima-launchers)
  (:serializer ,maxima-serialize)
  (:session "Maxima")
  (:scripts "Maxima"))

(when (supports-maxima?)
  (import-from (maxima-kbd))
  (import-from (maxima-menus))
  (lazy-input-converter (maxima-input) maxima)
  (plugin-approx-command-set! "maxima" "float")

  (kbd-map
    (:mode in-maxima?)
    (:mode in-math?)
    ("$" "$")))
