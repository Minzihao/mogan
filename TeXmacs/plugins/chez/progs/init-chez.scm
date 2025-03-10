
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;
;; MODULE      : init-chez.scm
;; DESCRIPTION : Initialize Chez Scheme plugin
;; COPYRIGHT   : (C) 2024   Darcy Shen
;;
;; This software falls under the GNU general public license version 3 or later.
;; It comes WITHOUT ANY WARRANTY WHATSOEVER. For details, see the file LICENSE
;; in the root directory or <http://www.gnu.org/licenses/gpl-3.0.html>.
;;
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(use-modules (binary chez))

(define (chez-serialize lan t)
  (let* ((u (pre-serialize lan t))
         (s (texmacs->code (stree->tree u) "utf-8")))
    (string-append s "\n<EOF>\n")))

(define (chez-launcher)
  (string-append (url->system (find-binary-chez))
    " --libdirs "
    (string-append (url->system (get-texmacs-path)) "/plugins/chez/chez")
    " --script "
    (url->system (get-texmacs-path))
    "/plugins/chez/chez/tm-chez.scm"))

(plugin-configure chez
  (:require (has-binary-chez?))
  (:launch ,(chez-launcher))
  (:serializer ,chez-serialize)
  (:session "Chez Scheme"))
